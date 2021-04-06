// Lesson 114: creamos el reducer para todo los usuarios.

//Initial State:
const INITIAL_STATE = {
   currentUser: null,
};

const userReducer = (currentState = INITIAL_STATE, action) => {
   //si currentState is undefined, será entonces INITIAL_STATE
   switch (action.type) {
      case "SET_CURRENT_USER":
         return {
            ...currentState,
            currentUser: action.payload,
         };

      default:
         return currentState;
   }
};

export default userReducer;
