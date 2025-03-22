import { MagnifierIcon } from "@/views/components/icons/magnifier"

export const SearchControlComponent = () => {
  return (
    <div
      class="bg-(--theme-light-fg) dark:bg-(--theme-dark-fg) px-8 py-4 rounded-[5px] flex gap-6 shadow-(--search-shadow) w-full"
      hx-on:click="focusOnSearchInput()"
    >
      {MagnifierIcon()}

      <input
        name="search"
        class="dark:placeholder:text-white focus:placeholder:opacity-40 w-full outline-0"
        type="search"
        placeholder="Search for a country..."
        id="search-input"
        hx-post="/search"
        hx-on:keyup="clearSelectControl()"
        hx-trigger="input changed delay:500ms, keyup[key=='Enter']"
        hx-target="#results"
      />
    </div>
  )
}
