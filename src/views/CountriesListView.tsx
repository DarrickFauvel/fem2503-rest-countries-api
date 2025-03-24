import { CountryItemComponent } from "src/views/components/country-item"
import { CountryProps } from "src/models/types/country"

export const CountriesListView = (countries: CountryProps[]) => {
  // console.log(countries)
  // const { region } = c.req.query()

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

  // const countries = await getCountriesByRegion(region)
  const countryItems = countries
    .map((country) => CountryItemComponent(country))
    .join("")

  return /* html */(`<ul class="flex flex-col gap-10 px-12">${countryItems}</ul>`)
}
