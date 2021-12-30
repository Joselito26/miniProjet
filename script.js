const images = [
  "explore-the-world",
  "city-on-winter",
  "mountains-and-clouds",
  "sunny-beach",
  "wild-forest",
];

for (let image of images) {
  const panel = createPanel(image);
  panel.addEventListener("click", function () {
    // panels.forEach(p => p.classList.remove('active'));
    panel.classList.add("active");
  });
}

function createPanel(img) {
  const panelDiv = document.createElement("div");
  panelDiv.style = "background-image: url(./images/" + img + ".jpg)";
  panelDiv.className = "panel";
  panelDiv.innerHTML = "<h3>MON TITRE</h3>";
  document.querySelector(".container").appendChild(panelDiv);
  return panelDiv;
}

// <div
//       style="background-image: url(./images/explore-the-world.jpg)"
//       class="panel active"
//     >
//       <h3>Explore the World</h3>
//     </div>
