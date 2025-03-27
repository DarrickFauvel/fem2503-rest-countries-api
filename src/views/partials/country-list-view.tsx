import { CountryItemView } from "src/views/partials/country-item-view"
import { FilterType } from "src/models/types/country"
import { countriesCollection } from "src/models/countriesModel"

export const CountryListView = ({ filter }) => {
  console.log(filter)

  let filteredCountries

  if (filter.type !== undefined) {
    if (filter.type === "query") {
      filteredCountries = countriesCollection.filter((country) =>
        country.name.toLowerCase().includes(filter.value)
      )
    } else if (filter.type === "region") {
      filteredCountries = countriesCollection.filter((country) => {
        // console.log(country.region.toLowerCase() === filter.value)
        return country.region.toLowerCase() === filter.value
      })
    } else {
      filteredCountries = countriesCollection
    }
  }

  const countryViewItems = filteredCountries.map((country) => {
    return <CountryItemView country={country} />
  })

  return <ul class="flex flex-col gap-10 px-12">{countryViewItems}</ul>
}
