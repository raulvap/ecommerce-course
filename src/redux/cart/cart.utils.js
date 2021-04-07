// Lesson 124
export const addItemToCart = (cartItems, cartItemToAdd) => {
   // busca el item a agregar dentro del array existente:
   const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

   // Si ya hay item a agregar, entonces regresa el arrya original, y suma la cantidad en el id correspondiente:
   if (existingCartItem) {
      return cartItems.map((cartItem) =>
         cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
      );
   }

   // Si no hay elemento a agregar, entonces lo agrega en el array:
   return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
