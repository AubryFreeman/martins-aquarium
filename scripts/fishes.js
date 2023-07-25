import { getFish } from "./database.js";

export const FishList = () => {
  const fishes = getFish();
  let htmlString = '<article class="Martins Aquarium">';
  for (const fish of fishes) {
    htmlString += `<section class="MARTINS FISHES">
        <div><img  class="fish_img" src="${fish.image}" style ="width:100px;height:auto;"/></div>
        <div class="fish__name">${fish.name}</div>
        <div class="fish__species">${fish.species}</div>
        <div class="fish__length">${fish.length} cm</div>
        <div class="fish__location">${fish.location}</div>
        <div class="fish__diet">${fish.food}</div>
    </section>
 `;
  }
  htmlString += `</article>`;
  return htmlString;
};
