export class Panel {
  constructor(title = "no title") {
    const div = (this.html = document.createElement("div"));
    this.initialize(div, title);
    this.listenClickEvent();
  }

  initialize(div, title) {
    // div.style = "background-image: url(images/" + img  + ".jpg)";
    div.style = "background-image: url(images/city-on-winter.jpg)";
    div.className = "panel";
    div.innerHTML = "<h3>" + title + "</h3>";
  }

  listenClickEvent() {
    this.html.addEventListener("click", () => {
      Array.from(this.html.parentNode.children).forEach((p) => {
        p.classList.remove("active");
      });
      this.html.classList.add("active");
    });
  }

  static render(panels) {
    panels[0].html.classList.add("active");
    panels.forEach((p) => {
      document.querySelector(".container").appendChild(p.html);
    });
  }
}
