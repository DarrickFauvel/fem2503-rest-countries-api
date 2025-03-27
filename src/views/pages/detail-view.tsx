import { BackButton } from "src/views/partials/back-button"
import { Layout } from "src/views/layout"
import { SearchControlView } from "src/views/partials/search-control-view"
import { SelectControlView } from "src/views/partials/select-control-view"
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
