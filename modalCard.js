document.addEventListener("DOMContentLoaded", function () {
    const modalButtons = document.querySelectorAll("[data-modal-open]");
    const modals = document.querySelectorAll(".modal-overlay-hidden");
    const closeButtons = document.querySelectorAll(".modal-close");

    modalButtons.forEach(button => {
        button.addEventListener("click", function () {
            const modalId = this.parentElement.getAttribute("data-modal");
            document.getElementById(modalId).classList.add("modal-overlay-visible");
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".modal-overlay-hidden").classList.remove("modal-overlay-visible");
        });
    });
});