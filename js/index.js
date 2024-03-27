import { closeMenu, downloadCV } from "./utils.js";

function listenToClickOnMenu() {
  const button = document.querySelector("#button-menu");
  button.addEventListener("click", () => {
    closeMenu();
  });
}

function listenToClickOnMenuLinks() {
  const links = document.querySelectorAll(".nav-list__item");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      console.log(link);
      closeMenu();
    });
  });
}

function listenToClickOnDownloadResume() {
  const downloadButton = document.querySelector("#download-button");
  downloadButton.addEventListener("click", downloadCV);
}

function setActiveLink() {
  let previousActiveNavItem;
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

setActiveLink();
listenToClickOnMenu();
listenToClickOnMenuLinks();
listenToClickOnDownloadResume();

document.addEventListener("scroll", setActiveLink);
