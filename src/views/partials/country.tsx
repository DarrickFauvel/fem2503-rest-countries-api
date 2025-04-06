const CountryItemComponent = ({ country }) => (
  <li
    class="animate-fade bg-(--theme-light-fg) dark:bg-(--theme-dark-bg) rounded-[5px] overflow-hidden shadow-(--card-shadow) cursor-pointer hover:outline-4 dark:hover:outline-(--theme-dark-fg) group"
    hx-get={`/countries/${country.alpha3Code.toLowerCase()}`}
    hx-trigger="click"
    hx-swap="innerHTML"
    hx-target="main"
    hx-push-url="true"
  >
    <div>
      <img
        class="group-hover:scale-110 transition duration-500"
        src={country.flag}
        alt=""
        loading="lazy"
      />
    </div>
    <div class="p-6">
      <h3 class="text-lg">{country.name}</h3>
      <ul class="py-4 text-sm flex flex-col gap-2">
        <li>
          <span class="font-semibold">Population:</span>{" "}
          <span class="font-light">{country.population}</span>
        </li>
        <li>
          <span class="font-semibold">Region:</span>{" "}
          <span class="font-light">{country.region}</span>
        </li>
        <li>
          <span class="font-semibold">Capital:</span>{" "}
          <span class="font-light">{country.capital}</span>
        </li>
      </ul>
    </div>
  </li>
)

const CountryListComponent = ({ countries }) => (
  <ul class="flex flex-col gap-10 px-12">
    {countries.map((country) => (
      <CountryItemComponent country={country} />
    ))}
  </ul>
)

export const renderCountryCard = (country) => (
  <CountryItemComponent country={country} />
)

export const renderCountryList = (countries) => (
  <CountryListComponent countries={countries} />
)
