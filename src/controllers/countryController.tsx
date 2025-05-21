import {
  countriesCollection,
  getCountriesByRegion,
  getCountryByCode,
  searchCountriesByName,
} from "src/models/countryModel"

import { Context } from "hono"
import { CountryListView } from "src/views/partials/country-list-view"
import { renderCountryDetail } from "src/views/detail"
import { renderCountryList } from "src/views/partials/country"

export const renderAllCountriesListView = () => {
  return <CountryListView countries={countriesCollection} />
}

export const handleSearch = async (c: Context) => {
  const query = c.req.query("q") || ""
  const countries = await searchCountriesByName(query)
  const html = renderCountryList(countries)
  return c.html(html)
}

export const handleRegionFilter = async (c: Context) => {
  const region = c.req.query("region") || ""
  const countries = await getCountriesByRegion(region)
  const html = renderCountryList(countries)
  return c.html(html)
}

export const showCountryDetail = async (c: Context) => {
  const code = c.req.param("code")
  const country = await getCountryByCode(code)

  if (!country) {
    return c.notFound()
  }

  const html = renderCountryDetail(country)
  return c.html(html)
}
