import { CountryProps } from "@/types/country"

export const CountryCard = (country: CountryProps) => {
  return (
    <article class="dark:bg-gray-700 rounded-[5px] overflow-hidden">
      <div>
        <img src={country.flag} alt="" />
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
    </article>
  )
}
