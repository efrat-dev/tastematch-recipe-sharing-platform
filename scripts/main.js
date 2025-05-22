document.addEventListener("DOMContentLoaded", () => {
    fetch('../components/navbar.html') // Load the HTML content of the navbar
      .then(response => response.text()) // Convert the response to text
      .then(data => {
        const navbarContainer = document.getElementById('navbar-container');
        if (navbarContainer) {
          navbarContainer.innerHTML = data; // Insert the navbar into the container
        }
      });
  });
  
document.addEventListener("DOMContentLoaded", () => {
  fetch("../components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data; // Insert the footer into the container
    });
});
