const button = document.querySelector("#button-menu");
button.addEventListener("click", () => {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("hidden");
});

function downloadCV() {
  const downloadLink = document.createElement("a");
  downloadLink.href =
    "https://drive.google.com/uc?export=download&id=1_eO-DJ0uUZMaKG0sN38RiSN9qJMXsgPe";
  downloadLink.download = "CV-Boyer-Jennifer";

  // Ajouter le lien à la page et le cliquer
  document.body.appendChild(downloadLink);
  downloadLink.click();

  document.body.removeChild(downloadLink);
}

const downloadButton = document.querySelector("#download-button");
downloadButton.addEventListener("click", downloadCV);

let previousActiveNavItem;

function setActiveLink() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const id = section.id;
    const navItem = document.querySelector(`.nav-list__item--${id}`);
    const isVisible = isElementVisible(section);

    if (isVisible) {
      navItem.classList.add("current-section");

      if (previousActiveNavItem && previousActiveNavItem !== navItem) {
        previousActiveNavItem.classList.remove("current-section");
      }
      previousActiveNavItem = navItem;
    } else {
      navItem.classList.remove("current-section");
    }
  });

  function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const midHeight = (rect.top + rect.bottom) / 2;
    const visible = midHeight >= 0 && midHeight < windowHeight;

    return visible;
  }
}

document.addEventListener("DOMContentLoaded", setActiveLink);
document.addEventListener("scroll", setActiveLink);
