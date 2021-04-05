// Firebase App (the core Firebase SDK) is always required and must be listed first
// https://firebase.google.com/docs/web/setup
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyBTyqtaqzgWHxvOZsIRbBmlZyXKgL9vyvM",
   authDomain: "e-commerce-raulvap.firebaseapp.com",
   projectId: "e-commerce-raulvap",
   storageBucket: "e-commerce-raulvap.appspot.com",
   messagingSenderId: "365812432507",
   appId: "1:365812432507:web:36a399c68f2fd0ae57acde",
   measurementId: "G-W67JP9YRZD",
};

//  configuring firebase store: Lesson 101
export const createUserProfileDocument = async (userAuth, additionalData) => {
   // si no hay usuario registrado:
   if (!userAuth) return;

   // --- Snapshot will tell us if the user exists or not.
   // --- documentRef will perform the CRUD mehods

   // si hay usuario, sacamos la referencia:
   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      // hacemos una conexión con la base de datos:
      try {
         //creamos un nuevo usuario:
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData,
         });
      } catch (error) {
         console.log("error creating user", error.message);
      }
   }

   return userRef;
};

firebase.initializeApp(firebaseConfig);

// *************************************************************************

//authentication:
export const auth = firebase.auth();

//dataBase:
export const firestore = firebase.firestore();

// set up Google Auth:
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
