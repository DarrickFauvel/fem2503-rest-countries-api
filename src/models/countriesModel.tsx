import { CountrySummaryProps } from "src/models/types/country"
import { allCountriesArray } from "src/db"

export const countriesCollection = allCountriesArray

// export const renderSearchResults = async (c) => {
//   const formData = await c.req.formData()
//   console.log(formData)
//   const searchQuery = formData.get("search")

//   const countries = allCountriesArray.map(
//     ({ name, population, region, capital, flag }: CountrySummaryProps) => ({
//       name,
//       population,
//       region,
//       capital,
//       flag,
//     })
//   )

//   if (typeof searchQuery === "string") {
//     const filteredCountries = countries.filter(
//       (country: CountrySummaryProps) => {
//         return country.name
//           .toLowerCase()
//           .includes(searchQuery?.toString().toLowerCase())
//       }
//     )

//     const countryItems = filteredCountries
//       .map((country) => CountryItemComponent(country))
//       .join("")

//     return c.html(`<ul class="flex flex-col gap-10 px-12">${countryItems}</ul>`)
//   }
// }

// export const getAllCountrySummaries = () => {
//   return countriesCollection.map(
//     ({ name, population, region, capital, flag }: CountrySummaryProps) => ({
//       name,
//       population,
//       region,
//       capital,
//       flag,
//     })
//   )
// }

// import { CountryProps } from "src/models/types/country"

// export const getAllCountries = async () => {
//   const JSON_DATA_FILE = "./src/public/data/countries.json"

//   // read text of json file
//   const textOfCountriesFile = await Bun.file(JSON_DATA_FILE).text()

//   // parse data from text
//   const allCountriesParsed = await JSON.parse(textOfCountriesFile)

//   // map only properties used into array
//   const allCountriesArray = await allCountriesParsed.map(
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

//   return allCountriesArray
// }
