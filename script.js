import { FormAddCard } from "./js/form-add-card.js";
import { Panel } from "./js/panel.js";

const panels = [
  new Panel("city on winter"),
  new Panel("explore the world"),
  new Panel("mountains and clouds"),
  new Panel("sunny beach"),
  new Panel("wild forest"),
];

buildPage();
addEventListener("hashchange", buildPage);

function buildPage() {
  document.querySelector(".container").innerHTML = "";

  switch (location.hash.substring(1)) {
    case "":
    case "home":
      Panel.render(panels);
      updateFooterLink("admin");
      break;
    case "admin":
      new FormAddCard(panels);
      updateFooterLink("home");
      break;
  }

  function updateFooterLink(route) {
    const footerLink = document.querySelector("footer a");
    footerLink.href = "#" + route;
    footerLink.innerText = route;
  }
}
