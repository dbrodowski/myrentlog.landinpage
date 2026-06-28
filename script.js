const hamburgerButton = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburgerButton && menu) {
  hamburgerButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    hamburgerButton.setAttribute("aria-expanded", String(isOpen));
  });
}
