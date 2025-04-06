import { allCountriesArray } from "src/db"

export const countriesCollection = allCountriesArray

export const searchCountriesByName = async (query: string) => {
  const regex = new RegExp(query, "i")
  return countriesCollection.filter((country) =>
    country.name.toLowerCase().includes(query)
  )
}

export const getCountriesByRegion = async (region: string) => {
  return await countriesCollection.filter((country) =>
    country.region.toLowerCase().includes(region.toLowerCase())
  )
}

export const getCountryByCode = async (code: string) => {
  return await countriesCollection.find(
    (country) => country.alpha3Code.toLowerCase() === code.toLowerCase()
  )
}
