import { getFish } from "./database.js";
import { FishList } from "./fishes.js";
const allFish = getFish();

for (const fish of allFish) {
  console.log(fish);
}
const parentHTMLElement = document.querySelector(".martins-fishes");
parentHTMLElement.innerHTML = FishList();
