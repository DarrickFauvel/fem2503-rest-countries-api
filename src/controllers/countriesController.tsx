import { CountryListView } from "src/views/partials/country-list-view"
import { DetailView } from "src/views/pages/detail-view"
import { FilterType } from "src/models/types/country"
import { countriesCollection } from "src/models/countriesModel"

export const renderCountryListView = (filter: FilterType) => {
  return <CountryListView filter={filter} />
}

export const renderCountryDetailView = (code) => {
  const foundCountry = countriesCollection.find(country => country.alpha3Code.toLowerCase() === code.toLowerCase())
  return <DetailView country={country} />
}