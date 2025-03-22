import { CountryProps, CountrySummaryProps } from "src/models/types/country"

import { CountryItemComponent } from "src/views/components/country-item"
import { Home } from "src/views/pages/Home"
import { Hono } from "hono"
import { logger } from "hono/logger"
import { serveStatic } from "hono/bun"

const app = new Hono()

app.use(logger())
app.use("/public/*", serveStatic({ root: "./src/" }))
// app.use(
//   "/countries.json",
//   serveStatic({ path: "./src/public/data/countries.json" })
// )

console.log("current directory:", import.meta.dir)

let allCountriesGlobalArray: CountryProps[] = []

// immediately load countries into global array
;(async () => {
  console.log("LOADING countries...")

  // read text of json file
  const textOfCountriesFile = await Bun.file(
    "./src/public/data/countries.json"
  ).text()

  // parse data from text
  const allCountriesParsed = await JSON.parse(textOfCountriesFile)

  // map only properties used into global array
  allCountriesGlobalArray = await allCountriesParsed.map(
    ({
      borders,
      capital,
      currencies,
      flag,
      languages,
      name,
      nativeName,
      population,
      region,
      subregion,
      topLevelDomain,
    }: CountryProps) => ({
      borders,
      capital,
      currencies,
      flag,
      languages,
      name,
      nativeName,
      population,
      region,
      subregion,
      topLevelDomain,
    })
  )
  console.log(
    `LOADED ${allCountriesGlobalArray.length} countries into server cache`
  )
})()

const getCountriesByRegion = async (region: string) => {
  // filter countries by region
  const filteredCountriesByRegion = allCountriesGlobalArray.filter(
    (country) => country.region === region
  )

  // create array of country summary properties
  const filteredCountries = filteredCountriesByRegion.map(
    ({ capital, flag, name, population, region, topLevelDomain }) => ({
      capital,
      flag,
      name,
      population,
      region,
      topLevelDomain,
    })
  )
  return filteredCountries
}

app.get("/", (c) => {
  return c.html(Home())
})

app.post("/search", async (c) => {
  const formData = await c.req.formData()
  const searchQuery = formData.get("search")

  const countries = allCountriesGlobalArray.map(
    ({ name, population, region, capital, flag }: CountrySummaryProps) => ({
      name,
      population,
      region,
      capital,
      flag,
    })
  )

  if (typeof searchQuery === "string") {
    const filteredCountries = countries.filter(
      (country: CountrySummaryProps) => {
        return country.name
          .toLowerCase()
          .includes(searchQuery?.toString().toLowerCase())
      }
    )

    const countryItems = filteredCountries
      .map((country: CountrySummaryProps) => CountryItemComponent(country))
      .join("")

    return c.html(`<ul class="flex flex-col gap-10 px-12">${countryItems}</ul>`)
  }
})

app.get("/countries", async (c) => {
  const { region } = c.req.query()

  const countries = await getCountriesByRegion(region)
  const countryItems = countries
    .map((country) => CountryItemComponent(country))
    .join("")

  return c.html(`<ul class="flex flex-col gap-10 px-12">${countryItems}</ul>`)
})

// PAGINATION
// app.get("/api/countries", (c) => {
//   const query = c.req.query()
//   const page = parseInt(query.page || "1", 10)
//   const limit = 10

//   // Calculate pagination
//   const startIndex = (page - 1) * limit
//   const endIndex = startIndex + limit
//   const paginatedCountries = allCountriesArray.slice(startIndex, endIndex)
//   const countryItems = paginatedCountries
//     .map((country: CountryProps, index) => {
//       return CountryItemComponent(country, index)
//     })
//     .join("")

//   return c.html(`<ul class="flex flex-col gap-10 px-12">${countryItems}</ul>`)
// })

export default app
