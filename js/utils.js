export function closeMenu() {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("hidden");
}

export function downloadCV() {
  const downloadLink = document.createElement("a");
  downloadLink.href =
    "https://drive.google.com/uc?export=download&id=1_eO-DJ0uUZMaKG0sN38RiSN9qJMXsgPe";
  downloadLink.download = "CV-Boyer-Jennifer";

  // Ajouter le lien à la page et le cliquer
  document.body.appendChild(downloadLink);
  downloadLink.click();

  document.body.removeChild(downloadLink);
}
