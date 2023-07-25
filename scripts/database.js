const database = {
  fishSpecies: [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/39/Salmo_salar.jpg",
      species: "Salmon",
      length: 60,
      food: "Small fish, insects, and crustaceans",
      name: "Finn",
      location: "Tickle Me River",
    },
    {
      image:
        "https://cdn-acgla.nitrocdn.com/bvIhcJyiWKFqlMsfAAXRLitDZjWdRlLX/assets/static/optimized/rev-5131b73/wp-content/uploads/2021/01/shutterstock_117425023-1-scaled.jpg",
      species: "Tuna",
      length: 200,
      food: "Other fish and squid",
      name: "Swift",
      location: "Wacky Wavy River",
    },
    {
      image: "https://cdn.britannica.com/02/117202-004-526214C9.jpg",
      species: "Guppy",
      length: 5,
      food: "Algae and small invertebrates",
      name: "Flash",
      location: "Giggle Creek",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Ameiurus_melas_by_Duane_Raver.png",
      species: "Catfish",
      length: 40,
      food: "Bottom-dwelling insects, plants, and small fish",
      name: "Whiskers",
      location: "Silly Serpent Stream",
    },
  ],
};

export const getFish = () => {
  return database.fishSpecies.map((fishSpecies) => ({ ...fishSpecies }));
};
