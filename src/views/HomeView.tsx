import { Layout } from "src/views/layout"
import { SearchControlComponent } from "src/views/components/search-control"
import { SelectControlComponent } from "src/views/components/select-control"
import { SpinnerIcon } from "src/views/components/icons/spinner"

type HomeViewProps = {
  welcomeMessage: string
  features: string[]
}

export const HomeView = ({ welcomeMessage, features }: HomeViewProps) => {
  return (
    <Layout title="Home">
      <div>
        <h1>Home View</h1>
        <h2>{welcomeMessage}</h2>

        <ul>
          {features.map((feature) => (
            <li>{feature}</li>
          ))}
        </ul>

        <SearchControlComponent />

        <SelectControlComponent />

        <section id="results" hx-get="/countries" hx-trigger="revealed"></section>

        <div id="spinner" class="htmx-indicator">
          {SpinnerIcon()}
        </div>
      </div>
    </Layout>
  )
}
