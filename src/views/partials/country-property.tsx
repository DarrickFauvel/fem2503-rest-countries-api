import { CountryProps } from "src/models/types/country"

type CountryPropertyProps = {
  country: CountryProps
  propertyTitle: string
  propertyKey: string
}

export const CountryProperty = ({
  country,
  propertyTitle,
  propertyKey,
}: CountryPropertyProps) => {
  const propertyValue = country[propertyKey]

  const isNumber = (value) => typeof value === "number"
  const isArray = (value) => Array.isArray(value)

  let displayablePropertyValue = propertyValue

  switch (propertyKey) {
    case "population":
      displayablePropertyValue = propertyValue.toLocaleString()
      break

    case "topLevelDomain":
      displayablePropertyValue = propertyValue.join(", ")
      break

    case "currencies":
      displayablePropertyValue = propertyValue
        .map((element) => element.name)
        .join(", ")
      break

    case "languages":
      displayablePropertyValue = propertyValue
        .map((element) => element.name)
        .join(", ")
      break

    default:
      break
  }

  return (
    <li>
      <span class="font-semibold">{propertyTitle}:</span>{" "}
      <span class="font-light">{displayablePropertyValue}</span>
    </li>
  )
}
