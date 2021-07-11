import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDR0F9yyDjoochEpvZGgO1WJdvKNfOfb2E",
  authDomain: "book-santa-7ff96.firebaseapp.com",
  projectId: "book-santa-7ff96",
  storageBucket: "book-santa-7ff96.appspot.com",
  messagingSenderId: "376945587010",
  appId: "1:376945587010:web:47e7f2f8c9d4cc7c67cedb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
