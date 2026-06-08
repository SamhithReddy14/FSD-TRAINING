document.getElementById("contactForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("successMsg")
            .classList.remove("d-none");

    this.reset();
});
