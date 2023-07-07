// Modal
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

// Footer
const headers = document.querySelectorAll(".accordion-header");
const accordionItems = document.querySelectorAll(".accordion-item");

headers.forEach(function (header) {
  header.addEventListener("click", function () {
    const item = this.parentNode;

    const isActive = item.classList.contains("accordion-item--active");

    accordionItems.forEach(function (item) {
      item.classList.remove("accordion-item--active");
      item.classList.add("accordion-item--closed");
    });

    if (!isActive) {
      item.classList.add("accordion-item--active");
      item.classList.remove("accordion-item--closed");
    }
  });
});
