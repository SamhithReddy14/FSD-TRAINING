const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const subjectInput = document.getElementById("subjectInput");
const messageInput = document.getElementById("messageInput");
const localVisitCount = document.getElementById("localVisitCount");
const sessionVisitCount = document.getElementById("sessionVisitCount");
const savedName = document.getElementById("savedName");
const clearStorageBtn = document.getElementById("clearStorageBtn");

let localCount = Number(localStorage.getItem("portfolioLocalVisits")) || 0;
localCount++;
localStorage.setItem("portfolioLocalVisits", localCount);
localVisitCount.textContent = localCount;

let sessionCount = Number(sessionStorage.getItem("portfolioSessionVisits")) || 0;
sessionCount++;
sessionStorage.setItem("portfolioSessionVisits", sessionCount);
sessionVisitCount.textContent = sessionCount;

nameInput.value = localStorage.getItem("portfolioName") || "";
emailInput.value = localStorage.getItem("portfolioEmail") || "";
subjectInput.value = sessionStorage.getItem("portfolioSubject") || "";
messageInput.value = sessionStorage.getItem("portfolioMessage") || "";
savedName.textContent = localStorage.getItem("portfolioName") || "None";

nameInput.addEventListener("input", function() {
    localStorage.setItem("portfolioName", nameInput.value);
    savedName.textContent = nameInput.value || "None";
});

emailInput.addEventListener("input", function() {
    localStorage.setItem("portfolioEmail", emailInput.value);
});

subjectInput.addEventListener("input", function() {
    sessionStorage.setItem("portfolioSubject", subjectInput.value);
});

messageInput.addEventListener("input", function() {
    sessionStorage.setItem("portfolioMessage", messageInput.value);
});

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    successMsg.classList.remove("d-none");

    sessionStorage.removeItem("portfolioSubject");
    sessionStorage.removeItem("portfolioMessage");
    subjectInput.value = "";
    messageInput.value = "";
    savedName.textContent = localStorage.getItem("portfolioName") || "None";
});

clearStorageBtn.addEventListener("click", function() {
    localStorage.removeItem("portfolioLocalVisits");
    localStorage.removeItem("portfolioName");
    localStorage.removeItem("portfolioEmail");
    sessionStorage.removeItem("portfolioSessionVisits");
    sessionStorage.removeItem("portfolioSubject");
    sessionStorage.removeItem("portfolioMessage");
    localVisitCount.textContent = "0";
    sessionVisitCount.textContent = "0";
    savedName.textContent = "None";
    contactForm.reset();
});
