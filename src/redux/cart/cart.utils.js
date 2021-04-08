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

//Lesson 139:
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
   // va a buscar dentro del cart, si está el item que eremos quitar
   const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

   // si si existe este item, entonces si la cantidad es igual a 1, entonces lo va a quitar con un filter
   if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
   }

   // si si existe y no es 1 en quantity, entonces va a quitar 1 item que coincida con el id seleccionado
   return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
         ? { ...cartItem, quantity: cartItem.quantity - 1 }
         : cartItem
   );
};
