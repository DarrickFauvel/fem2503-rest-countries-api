import { CountryItemComponent } from "@/views/components/country-item"
import { CountryProps } from "@/types/country"
import { Home } from "@/views/pages/Home"
import { Hono } from "hono"
import { serveStatic } from "hono/bun"

const app = new Hono()

app.use("/public/*", serveStatic({ root: "./" }))
app.use("/countries.json", serveStatic({ path: "./countries.json" }))

let allCountriesArray: CountryProps[] = []

const getAllCountries = async () => {
  console.log("Getting countries...")
  const allCountriesData = await Bun.file("./public/data/countries.json").text()
  console.log("Parsing countries...")
  const parsedCountries = await JSON.parse(allCountriesData).map(
    ({ name, population, region, capital, flag }: CountryProps) => ({
      name,
      population,
      region,
      capital,
      flag,
    })
  )
  console.log("Countries parsed")
  return parsedCountries
}

app.get("/", (c) => {
  return c.html(Home())
})

app.get("/api/countries", async (c) => {
  const countries =
    allCountriesArray.length < 1 ? await getAllCountries() : allCountriesArray
  const countryItems = countries
    .map((country: CountryProps) => CountryItemComponent(country))
    .join("")
  return c.html(`<ul class="flex flex-col gap-10 px-12">${countryItems}</ul>`)
})

// app.get("/api/country/:alpha2code", async (c) => {
//   const { params } = c.req.param
//   console.log(params)
// })

export default app
