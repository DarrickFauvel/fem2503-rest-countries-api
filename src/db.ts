import { CountryProps } from "src/models/types/country"

// export const getAllCountries = async () => {
const JSON_DATA_FILE = "./src/public/data/countries.json"

// read text of json file
const textOfCountriesFile = await Bun.file(JSON_DATA_FILE).text()

// parse data from text
const allCountriesParsed = await JSON.parse(textOfCountriesFile)

// map only properties used into array
export const allCountriesArray = await allCountriesParsed.map(
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



//   return allCountriesArray
// }
