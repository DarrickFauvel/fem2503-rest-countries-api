import { MoonIcon } from "@/views/components/icons/moon"
import { SearchComponent } from "@/views/components/search"
import { SpinnerIcon } from "@/views/components/icons/spinner"
import { localStorageHeadScript } from "@/utils/localstorage-head-script"

export const Home = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {localStorageHeadScript()}
        <script src="/public/js/htmx.min.js" defer></script>
        <script
          type="module"
          src="https://cdn.jsdelivr.net/gh/starfederation/datastar@v1.0.0-beta.9/bundles/datastar.js"
        ></script>
        <script src="/public/js/script.js" defer></script>
        <link rel="stylesheet" href="/public/css/output.css" />
        <title>REST Countries API</title>
      </head>

      <body class="bg-zinc-100 dark:bg-gray-800 text-neutral-900 dark:text-white flex flex-col">
        <header class="bg-white dark:bg-gray-700 flex justify-between px-4 py-8 shadow-(--header-shadow)">
          <h1 class="text-xl font-semibold">Where in the world?</h1>
          <button
            class="flex items-center gap-2 cursor-pointer"
            hx-on:click="toggleTheme()"
          >
            {MoonIcon()}
            <span class="text-xs font-semibold text-nowrap">Dark Mode</span>
          </button>
        </header>

        <main class="px-4 py-6 flex flex-col items-center gap-8">
          {SearchComponent()}
          <button
            class="border bg-gray-200 px-4 py-2 cursor-pointer rounded-sm hover:bg-gray-300"
            hx-get="/api/countries"
            hx-target="#cards"
          >
            Get all countries
          </button>
          <button
            hx-target="#cards"
            hx-indicator="#spinner"
            hx-on:click="clearCards()"
          >
            Clear cards
          </button>

          <div id="spinner" class="htmx-indicator">
            {SpinnerIcon()}
          </div>

          <section class="flex flex-col gap-10 px-12" id="cards"></section>
        </main>
      </body>
    </html>
  )
}
