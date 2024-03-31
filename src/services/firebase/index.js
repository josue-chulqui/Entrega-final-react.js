
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Corregido el nombre del import

const firebaseConfig = {
  apiKey: "AIzaSyCvwlMo12loHV-wT2PK6kB725LjXj6MAws",
  authDomain: "ecomerce-final-3a99b.firebaseapp.com",
  projectId: "ecomerce-final-3a99b",
  storageBucket: "ecomerce-final-3a99b.appspot.com",
  messagingSenderId: "382266849018",
  appId: "1:382266849018:web:37ce62a6037db10c993b43"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Corregido el nombre de la función
