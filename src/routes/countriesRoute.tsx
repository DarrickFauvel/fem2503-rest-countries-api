import { countriesCollection, renderSearchResults } from "src/models/countriesModel"

import { CountryItemComponent } from "src/views/components/country-item"
import { CountryProps } from "src/models/types/country"
import { Hono } from "hono"
import { renderCountriesView } from "src/controllers/countriesController"
import { renderHomeView } from "src/controllers/homeController"

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

countriesRoute.get("/", (c) => c.html(renderCountriesView()))

countriesRoute.get("/search", async (c) => {
  const query = c.req.query("q") || "";
  const region = c.req.query("region") || "";

  const filter: any = {};
  if (query) filter.name = new RegExp(query, "i");
  if (region) filter.region = region;

  const results = await countriesCollection.find(filter).toArray();
  console.log(results)
  return c.html(renderCountriesView());
})

export default countriesRoute
