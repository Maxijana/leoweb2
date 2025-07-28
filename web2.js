// web2.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("kontaktForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/service.schaeferleo@gmail.com", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        form.reset();
        formMessage.style.display = "block";
        formMessage.style.color = "green";
        formMessage.textContent = "Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.";
      } else {
        formMessage.style.display = "block";
        formMessage.style.color = "red";
        formMessage.textContent = "Es gab ein Problem beim Senden. Bitte versuchen Sie es später erneut.";
      }
    } catch (error) {
      formMessage.style.display = "block";
      formMessage.style.color = "red";
      formMessage.textContent = "Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.";
    }
  });
});
