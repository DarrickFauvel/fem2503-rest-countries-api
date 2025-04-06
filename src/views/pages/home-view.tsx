import { Layout } from "src/views/layout"
import { SearchControlView } from "src/views/partials/search-control-view"
import { SelectControlView } from "src/views/partials/select-control-view"
import { SpinnerIcon } from "src/views/partials/icons/spinner"

export const HomeView = () => {
  return (
    <Layout title="Home">
      <SearchControlView />

      <SelectControlView />

      <section
        id="results"
        hx-get="/countries"
        hx-trigger="revealed"
      ></section>

      <div id="spinner" class="htmx-indicator">
        <SpinnerIcon />
      </div>
    </Layout>
  )
}
