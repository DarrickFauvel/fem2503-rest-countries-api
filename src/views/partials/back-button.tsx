export const BackButton = () => {
  return (
    <button
      class="bg-(--theme-light-fg) dark:bg-(--theme-dark-fg) px-6 py-3.5 rounded-[5px] cursor-pointer"
      onclick="window.history.back()"
    >
      &lt; Back
    </button>
  )
}
