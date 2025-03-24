import { MoonIcon } from "src/views/components/icons/moon"
import { PropsWithChildren } from "hono/jsx"
import { localStorageHeadScript } from "src/views/utils/localstorage-head-script"

type LayoutProps = {
  title: string
}

export const Layout = ({ title, children }: PropsWithChildren<LayoutProps>) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {localStorageHeadScript()}
        <script src="/public/js/htmx.min.js" defer></script>
        <script src="/public/js/script.js" defer></script>
        <link rel="stylesheet" href="/public/css/output.css" />
        <title>{title} | REST Countries API</title>
      </head>

      <body class="bg-(--theme-light-bg) dark:bg-(--theme-dark-bg) text-neutral-900 dark:text-white flex flex-col">
        <header class="bg-(--theme-light-fg) dark:bg-(--theme-dark-fg) flex justify-between px-4 py-8 shadow-(--header-shadow)">
          <h1 class="text-xl font-semibold">Where in the world?</h1>
          <button
            class="flex items-center gap-2 cursor-pointer"
            hx-on:click="toggleTheme()"
          >
            <MoonIcon />

            <span class="text-xs font-semibold text-nowrap">Dark Mode</span>
          </button>
        </header>

        <main class="px-4 py-6 flex flex-col items-center gap-8">
          {children}
        </main>

        <footer></footer>
      </body>
    </html>
  )
}
