import { cardComponent } from "../Components/Card.js";
import { data } from "../data/products.js";

let renderArea = document.querySelector("#render-area");

data.map((product) => {
  console.log(product);
  renderArea.innerHTML += cardComponent(product);
});
