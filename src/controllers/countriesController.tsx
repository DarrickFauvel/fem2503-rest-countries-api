import { CountriesListView, } from "src/views/CountriesListView"
import { countriesCollection } from "src/models/countriesModel"

//     const countries = await getCountriesByRegion(region)
//     const countryItems = countries
//       .map((country) => CountryItemComponent(country))
//       .join("")

//     return c.html(`<ul class="flex flex-col gap-10 px-12">${countryItems}</ul>`)
//   }

export const renderCountriesListView = async () => {
  const allCountries = countriesCollection

  return CountriesListView(allCountries)
}
