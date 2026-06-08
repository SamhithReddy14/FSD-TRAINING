var registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("successMsg").classList.remove("d-none");
        registrationForm.reset();
    });
}

var contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("contactSuccess").classList.remove("d-none");
        contactForm.reset();
    });
}
