import { BackButton } from "src/views/partials/back-button"
import { Layout } from "src/views/layout"
import { SpinnerIcon } from "src/views/partials/icons/spinner"

export const DetailView = ({ country }) => {
  return (
    <Layout title="Home">
      <BackButton />

      <h1>
        {country.code} = {country.name}
      </h1>

      <div id="spinner" class="htmx-indicator">
        {SpinnerIcon()}
      </div>
    </Layout>
  )
}
