import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyAZ78AjPNeggqJMiVV39LaqAWZlxdDZGp0",
   authDomain: "very-hot-burgers-a5806.firebaseapp.com",
   databaseURL: "https://very-hot-burgers-a5806-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;