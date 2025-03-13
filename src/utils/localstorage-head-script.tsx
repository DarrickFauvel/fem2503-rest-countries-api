export const localStorageHeadScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function () {
            if (localStorage.getItem("theme") === "dark") {
              document.documentElement.classList.add("dark");
            }
          })();
        `,
      }}
    />
  )
}
