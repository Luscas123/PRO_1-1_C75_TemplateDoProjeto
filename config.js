import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA8OHpEdHkKZaXMRIxo-lwh08O93nEsq5k",
  authDomain: "ciclista-eletroni.firebaseapp.com",
  databaseURL: "https://ciclista-eletroni-default-rtdb.firebaseio.com",
  projectId: "ciclista-eletroni",
  storageBucket: "ciclista-eletroni.appspot.com",
  messagingSenderId: "537585784524",
  appId: "1:537585784524:web:ab8e54fec65a4275c8d469"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
