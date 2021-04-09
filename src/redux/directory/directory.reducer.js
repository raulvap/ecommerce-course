// Lesson 142: creating state with directory

//Lesson 150: Data normalization: convert the array to an object

const INITIAL_STATE = {
   sections: [
      {
         title: "hats",
         imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
         id: 1,
         linkUrl: "shop/hats",
      },
      {
         title: "jackets",
         imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
         id: 2,
         linkUrl: "shop/jackets",
      },
      {
         title: "sneakers",
         imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
         id: 3,
         linkUrl: "shop/sneakers",
      },
      {
         title: "womens",
         imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
         size: "large",
         id: 4,
         linkUrl: "shop/womens",
      },
      {
         title: "mens",
         imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
         size: "large",
         id: 5,
         linkUrl: "shop/mens",
      },
   ],
};

// Lesson 142:
const directoryReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      default:
         return state;
   }
};

export default directoryReducer;
