import {
  handleRegionFilter,
  handleSearch,
  renderAllCountriesListView,
  showCountryDetail,
} from "src/controllers/countryController"

import { Hono } from "hono"

const countriesRoute = new Hono()

countriesRoute.get("/", async (c) => {
  return c.html(renderAllCountriesListView())
})

countriesRoute.get("/search", handleSearch)

countriesRoute.get("/filter", handleRegionFilter)

countriesRoute.get("/:code", showCountryDetail)

export default countriesRoute
