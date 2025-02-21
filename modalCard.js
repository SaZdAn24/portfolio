document.addEventListener("DOMContentLoaded", function () {
    const modalButtons = document.querySelectorAll("[data-modal-open]");
    const closeButtons = document.querySelectorAll(".modal-close");
    const modals = document.querySelectorAll(".modal-overlay");

    // Открытие модального окна
    modalButtons.forEach(button => {
        button.addEventListener("click", function () {
            const modalId = this.closest(".card").getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove("modal-overlay-hidden");
                modal.classList.add("modal-overlay-visible");
            }
        });
    });

    // Закрытие модального окна по кнопке
    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const modal = this.closest(".modal-overlay");
            if (modal) closeModal(modal);
        });
    });

    // Закрытие модального окна при клике за его пределами
    modals.forEach(modal => {
        modal.addEventListener("click", function (event) {
            if (event.target.classList.contains("modal-overlay")) {
                closeModal(modal);
            }
        });
    });

    // Закрытие модального окна по клавише Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            const openModal = document.querySelector(".modal-overlay-visible");
            if (openModal) {
                closeModal(openModal);
            }
        }
    });

    // Функция закрытия модального окна
    function closeModal(modal) {
        modal.classList.remove("modal-overlay-visible");
        modal.classList.add("modal-overlay-hidden");
    }
});
