import { CountryProps } from "src/models/types/country"

export const CountryItemView = ({ country }: { country: CountryProps }) => {
  return (
    <li
      class="animate-fade bg-(--theme-light-fg) dark:bg-(--theme-dark-bg) rounded-[5px] overflow-hidden shadow-(--card-shadow) cursor-pointer hover:outline-4 dark:hover:outline-(--theme-dark-fg) group"
      hx-get={`/countries/${country.alpha3Code.toLowerCase()}`}
      hx-trigger="click"
      hx-target="main"
      hx-swap="innerHTML"
      hx-push-url="true"
    >
      <div>
        <img
          class="group-hover:scale-110 transition duration-500"
          src={country.flag}
          alt={`${country.name} flag`}
          loading="lazy"
        />
      </div>
      <div class="p-6">
        <h3 class="text-lg">{country.name}</h3>
        <ul class="py-4 text-sm flex flex-col gap-2">
          <li>
            <span class="font-semibold">Population:</span>{" "}
            <span class="font-light">{country.population ?? "--none--"}</span>
          </li>
          <li>
            <span class="font-semibold">Region:</span>{" "}
            <span class="font-light">{country.region ?? "--none--"}</span>
          </li>
          <li>
            <span class="font-semibold">Capital:</span>{" "}
            <span class="font-light">{country.capital ?? "--none--"}</span>
          </li>
        </ul>
      </div>
    </li>
  )
}
