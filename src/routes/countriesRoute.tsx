import {
  countriesCollection,
  renderSearchResults,
} from "src/models/countriesModel"

import { DetailView } from "src/views/pages/detail-view"
import { FilterType } from "src/models/types/country"
import { Hono } from "hono"
import { renderCountryListView } from "src/controllers/countriesController"

const countriesRoute = new Hono()

// let allCountriesGlobalArray: CountryProps[] = []

// ;(async () => {
//   console.log("LOADING countries...")

//   // read text of json file
//   const textOfCountriesFile = await Bun.file(
//     "./src/public/data/countries.json"
//   ).text()

//   // parse data from text
//   const allCountriesParsed = await JSON.parse(textOfCountriesFile)

//   // map only properties used into global array
//   allCountriesGlobalArray = await allCountriesParsed.map(
//     ({
//       borders,
//       capital,
//       currencies,
//       flag,
//       languages,
//       name,
//       nativeName,
//       population,
//       region,
//       subregion,
//       topLevelDomain,
//     }: CountryProps) => ({
//       borders,
//       capital,
//       currencies,
//       flag,
//       languages,
//       name,
//       nativeName,
//       population,
//       region,
//       subregion,
//       topLevelDomain,
//     })
//   )
//   console.log(
//     `LOADED ${allCountriesGlobalArray.length} countries into server cache`
//   )
// })()

// const getCountriesByRegion = async (region: string) => {
//   // filter countries by region
//   const filteredCountriesByRegion = allCountriesGlobalArray.filter(
//     (country) => country.region === region
//   )

//   // create array of country summary properties
//   const filteredCountries = filteredCountriesByRegion.map(
//     ({ capital, flag, name, population, region, topLevelDomain }) => ({
//       capital,
//       flag,
//       name,
//       population,
//       region,
//       topLevelDomain,
//     })
//   )
//   return filteredCountries
// }

countriesRoute.get("/", (c) => c.html(renderCountryListView()))

countriesRoute.get("/:code", (c) => {
  const { code } = c.req.param()
  console.log("country code:", code)
  return c.html(<DetailView code={code} />)
})

countriesRoute.get("/search", async (c) => {
  const query = c.req.query("q") || ""
  const region = c.req.query("region") || ""

  const filter: FilterType = { type: "", value: "" }
  if (query) {
    filter.type = "query"
    filter.value = query.toLowerCase()
  } else if (region) {
    filter.type = "region"
    filter.value = region.toLowerCase()
  } else {
    filter.type = "none"
    filter.value = ""
  }

  return c.html(renderCountryListView(filter))
})

export default countriesRoute
