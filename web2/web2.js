// leowebstranica.js

console.log('JS učitan');

const form = document.getElementById("kontaktForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function() {
    // Prikaz poruke zahvalnosti odmah
    if (formMessage) {
        formMessage.style.display = "block";
    }

    // Reset forme (malo kasnije da ne prekine submit)
    setTimeout(() => {
        form.reset();
    }, 100);
});
