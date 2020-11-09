import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCme6KsTnGW6XIQ-PyplWP-1MzHHf3VHDs",
  authDomain: "e-challenge-a4914.firebaseapp.com",
  databaseURL: "https://e-challenge-a4914.firebaseio.com",
  projectId: "e-challenge-a4914",
  storageBucket: "e-challenge-a4914.appspot.com",
  messagingSenderId: "749133081244",
  appId: "1:749133081244:web:6ab6147a5b19dbe0661b59",
  measurementId: "G-FXQ6S2SFFB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
