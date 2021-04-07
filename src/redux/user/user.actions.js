//Lesson 118: import consistent types
import { UserActionTypes } from "./user.types";

// Lesson 115: functions that return objects

export const setCurrentUser = (user) => ({
   type: UserActionTypes.SET_CURRENT_USER,
   payload: user,
});
