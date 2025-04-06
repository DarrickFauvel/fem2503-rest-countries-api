import { CountryItemView } from "src/views/partials/country-item-view"

export const CountryListView = ({ countries }) => {
  const countryViewItems = countries.map((country) => {
    return <CountryItemView country={country} />
  })

  return <ul class="flex flex-col gap-10 px-12">{countryViewItems}</ul>
}
