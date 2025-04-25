import { BackButton } from "src/views/partials/back-button"
import { CountryProperty } from "src/views/partials/country-property"
import { Layout } from "src/views/layout"
import { countriesCollection } from "src/models/countryModel"

const DetailViewComponent = ({ country }) => {
  const getCountryFullName = (alpha3Code) => {
    const foundCountry = countriesCollection.find(
      (country) => country.alpha3Code === alpha3Code
    )
    return foundCountry.name
  }

  const getCountryBorderItems = (borders) => {
    if (borders) {
      return borders.map((alpha3Code) => {
        return (
          <li>
            <button
              class="bg-(--theme-light-fg) dark:bg-(--theme-dark-fg) px-6 py-2 rounded-[5px] cursor-pointer"
              // hx-get={`/countries/${alpha3Code}`}
              // hx-target='body'
            >
              {getCountryFullName(alpha3Code)}
            </button>
          </li>
        )
      })
    }

    return <li class="text-sm font-light">-- None --</li>
  }

  return (
    <Layout>
      <BackButton />

      <article class="bg-(--theme-light-fg) dark:bg-(--theme-dark-bg) overflow-hidden shadow-(--card-shadow)">
        <div>
          <img
            class="rounded-[5px]"
            src={country.flag}
            alt={`${country.name} flag`}
            loading="lazy"
          />
        </div>
        <div class="p-6">
          <h3 class="text-lg">{country.name}</h3>

          <ul class="py-4 text-sm flex flex-col gap-2">
            <CountryProperty
              country={country}
              propertyTitle="Native Name"
              propertyKey="nativeName"
            />
            <CountryProperty
              country={country}
              propertyTitle="Population"
              propertyKey="population"
            />
            <CountryProperty
              country={country}
              propertyTitle="Region"
              propertyKey="region"
            />
            <CountryProperty
              country={country}
              propertyTitle="Sub Region"
              propertyKey="subregion"
            />
            <CountryProperty
              country={country}
              propertyTitle="Capital"
              propertyKey="capital"
            />
          </ul>

          <ul class="py-4 text-sm flex flex-col gap-2">
            <CountryProperty
              country={country}
              propertyTitle="Top Level Domain"
              propertyKey="topLevelDomain"
            />
            <CountryProperty
              country={country}
              propertyTitle="Currencies"
              propertyKey="currencies"
            />
            <CountryProperty
              country={country}
              propertyTitle="Languages"
              propertyKey="languages"
            />
          </ul>

          <h4>Border Countries</h4>
          <ul class="flex flex-wrap gap-4">
            {getCountryBorderItems(country.borders)}
          </ul>
        </div>
      </article>
    </Layout>
  )
}

export const renderCountryDetail = (country) => (
  <DetailViewComponent country={country} />
)
