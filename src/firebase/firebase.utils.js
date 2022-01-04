import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyC9grz9W_pfgwReuZR0LV4YWaFoyJamsVE",
  authDomain: "crown-clothing-4ae83.firebaseapp.com",
  projectId: "crown-clothing-4ae83",
  storageBucket: "crown-clothing-4ae83.appspot.com",
  messagingSenderId: "482248222766",
  appId: "1:482248222766:web:4107847ae25e4964f2d7bf",
  measurementId: "G-15ZS72RJE2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
