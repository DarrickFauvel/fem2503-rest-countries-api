import { CountryItemComponent } from "@/views/components/country-item"
import { CountryProps } from "@/types/country"
import { Home } from "@/views/pages/Home"
import { Hono } from "hono"
import { logger } from "hono/logger"
import { serveStatic } from "hono/bun"

const app = new Hono()

app.use(logger())
app.use("/public/*", serveStatic({ root: "./" }))
app.use("/countries.json", serveStatic({ path: "./countries.json" }))

let allCountriesGlobalArray = []

;(async () => {
  const textOfCountriesFile = await Bun.file(
    "./public/data/countries.json"
  ).text()
  allCountriesGlobalArray = await JSON.parse(textOfCountriesFile)
  console.log(
    `${allCountriesGlobalArray.length} countries loaded into server cache`
  )
})()

      name,
      population,
      region,
      capital,
      flag,
    })
  )

  const filteredCountries =
    region !== ""
      ? countries.filter((country: CountryProps) => country.region === region)
      : countries

  return filteredCountries
}

app.get("/", (c) => {
  return c.html(Home())
})

app.post("/search", async (c) => {
  const formData = await c.req.formData()
  const searchQuery = formData.get("search")

  const textOfCountriesFile = await Bun.file(
    "./public/data/countries.json"
  ).text()
  const countriesArray = await JSON.parse(textOfCountriesFile)

  const countries =
    countriesArray &&
    countriesArray.map(
      ({ name, population, region, capital, flag }: CountryProps) => ({
        name,
        population,
        region,
        capital,
        flag,
      })
    )

  if (typeof searchQuery === "string") {
    const filteredCountries = countries.filter((country: CountryProps) => {
      return country.name
        .toLowerCase()
        .includes(searchQuery?.toString().toLowerCase())
    })

    const countryItems = filteredCountries
      .map((country: CountryProps) => CountryItemComponent(country))
      .join("")

    return c.html(`<ul class="flex flex-col gap-10 px-12">${countryItems}</ul>`)
  }
})

app.get("/api/countries", async (c) => {
  const { region } = c.req.query()

  const countries = await getCountries(region)
  const countryItems = countries
    .map((country: CountryProps) => CountryItemComponent(country))
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
