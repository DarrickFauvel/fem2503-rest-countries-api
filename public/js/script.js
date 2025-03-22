document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark")
  }
})

const searchInput = document.querySelector("#search-input")
const selectControl = document.querySelector('#select-control')

function toggleTheme() {
  document.documentElement.classList.toggle("dark")
  let isDark = document.documentElement.classList.contains("dark")
  localStorage.setItem("theme", isDark ? "dark" : "light")
}

function focusOnSearchInput() {
  searchInput.focus()
}

function clearSelectControl() {
  selectControl.value = ''
}

function clearSearchInput() {
  searchInput.value = ''
}