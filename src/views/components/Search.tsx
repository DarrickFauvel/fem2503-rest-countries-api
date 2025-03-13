import { svgSearchIcon } from "./svg-search-icon"

export const Search = () => {
  return (
    <div
      class="bg-white dark:bg-gray-700 px-8 py-4 rounded-[5px] flex gap-6 shadow-(--search-shadow)"
      hx-on:click="focusOnSearchInput()"
    >
      {svgSearchIcon()}
      <input
        class="dark:placeholder:text-white focus:placeholder:opacity-40 w-full outline-0"
        type="text"
        placeholder="Search for a country..."
        id="search-input"
      />
    </div>
  )
}
