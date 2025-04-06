import { Hono } from "hono"
import countriesRoute from "src/routes/countriesRoute"
import { logger } from "hono/logger"
import { renderHomeView } from "src/controllers/homeController"
import { serveStatic } from "hono/bun"

const app = new Hono()

app.use(logger())
app.use("/public/*", serveStatic({ root: "./src/" }))

app.get("/", (c) => c.html(renderHomeView()))

app.route("/countries", countriesRoute)

// console.log("current directory:", import.meta.dir)

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
