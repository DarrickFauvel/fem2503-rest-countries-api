import { BackButton } from "src/views/partials/back-button"
import { Layout } from "src/views/layout"
import { SpinnerIcon } from "src/views/partials/icons/spinner"

const DetailViewComponent = ({ country }) => {
  return (
    <>
      <BackButton />

      <h1>
        {country.code} = {country.name}
      </h1>

      <div id="spinner" class="htmx-indicator">
        <SpinnerIcon />
      </div>
    </>
  )
}

export const renderCountryDetail = (country) => (
  <DetailViewComponent country={country} />
)
