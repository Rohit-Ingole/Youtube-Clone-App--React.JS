import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB95MLkoy0V4gP8BcXHLB6DeOjezdAZ1Us",
  authDomain: "clone-app-2c2c2.firebaseapp.com",
  projectId: "clone-app-2c2c2",
  storageBucket: "clone-app-2c2c2.appspot.com",
  messagingSenderId: "210643953602",
  appId: "1:210643953602:web:bc91e26c4b8edc9775985b",
  measurementId: "G-59LX1RZP0N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
