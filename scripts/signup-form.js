document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("signupModal");
    const openModal = document.querySelector(".open-modal");
    const closeButtons = document.querySelectorAll(".close-modal");
  
      // Open the modal when the designated button is clicked
    if (openModal && modal) {
      openModal.addEventListener("click", () => {
        modal.classList.add("open");
      });
    }
  
      // Close the modal when any close button inside it is clicked
    closeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.classList.remove("open");
      });
    });
  
      // Close the modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("open");
      }
    });
  
    const form = document.querySelector(".modal-content");

      // Validate password match before submitting the form
    if (form) {
      form.addEventListener("submit", function (e) {
        const psw = document.getElementById("password");
        const repeat = document.getElementById("password-repeat");
        if (psw && repeat && psw.value !== repeat.value) {
          e.preventDefault();
          alert("הסיסמאות אינן תואמות");
        }
      });
    }
  });
  