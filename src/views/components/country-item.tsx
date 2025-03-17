import { CountryProps } from "@/types/country"

export const CountryItemComponent = (country: CountryProps) => {
  const htmlContent = (
    <>
      <div>
        <img src={country.flag} alt="" loading="lazy" />
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
    </>
  )

  return `<li class="animate-fade bg-white dark:bg-gray-700 rounded-[5px] overflow-hidden shadow-(--card-shadow)">${htmlContent}</li>`
}
