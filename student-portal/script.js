(() => {
  const forms = document.querySelectorAll(".needs-validation");
  const search = document.querySelector("#studentSearch");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    });
  });

  if (search) {
    search.addEventListener("input", () => {
      const value = search.value.toLowerCase();
      document.querySelectorAll("tbody tr").forEach((row) => {
        row.style.display = row.textContent.toLowerCase().includes(value) ? "" : "none";
      });
    });
  }
})();
