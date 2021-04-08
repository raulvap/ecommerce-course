// Lesson 132: user selectors:
import { createSelector } from "reselect";

//Vamos a tomar del state, solo el user's state:
const selectUser = (state) => state.user;

//vamos a utilizar el state del user:
export const selectCurrentUser = createSelector(
   // 1st argument: el state que sacamos del state general
   [selectUser],
   // 2nd argument: la función para manejar el state, lo que queremos hacer:
   (user) => user.currentUser
);
