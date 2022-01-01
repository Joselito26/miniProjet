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
    div.innerHTML = `<h3>${capitaliseTitle()}</h3>`;

    function capitaliseTitle() {
      const words = title.split(" ");

      const result = words.map((w) => {
        let first = w.charAt(0);
        first = first.toUpperCase();
        const rest = w.slice(1);
        return first + rest + " ";
      });

      console.log(result);

      return result.join(" ");

      // const words = title.split(" "); // ['mon,'  'super', 'titre']

      // let newTitle = "";

      // words.forEach((w) => {
      //   // mon, (1er tour de boucle)
      //   let first = w.charAt(0); // m
      //   first = first.toUpperCase(); // M
      //   const rest = w.slice(1); // mon ---> on
      //   newTitle += first + rest + " "; // --> Mon
      // });
    }
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
