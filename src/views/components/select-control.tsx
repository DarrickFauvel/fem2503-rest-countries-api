export const SelectControlComponent = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

  const createRegionOptions = () => {
    return regions.map((region) => <option value={region}>{region}</option>)
  }

  return (
    <select
      name="region"
      class="bg-white dark:bg-gray-700 px-6 py-3.5 rounded-[5px] self-start"
      hx-get="/api/countries"
      hx-target="#cards"
      hx-trigger="revealed, change"
      hx-indicator="#spinner"
    >
      <option value="">Filter By Region</option>
      {createRegionOptions()}
    </select>
  )
}
