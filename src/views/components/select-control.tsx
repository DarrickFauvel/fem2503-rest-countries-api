export const SelectControlComponent = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

  const createRegionOptions = () => {
    return regions.map((region) => <option value={region}>{region}</option>)
  }

  return (
    <select
      name="region"
      id="select-control"
      class="bg-(--theme-light-fg) dark:bg-(--theme-dark-fg) px-6 py-3.5 rounded-[5px] self-start"
      hx-get="/countries/search"
      hx-target="#results"
      hx-trigger="change"
      hx-indicator="#spinner"
      hx-on:change="clearSearchInput()"
    >
      <option value="">Filter By Region</option>
      {createRegionOptions()}
    </select>
  )
}
