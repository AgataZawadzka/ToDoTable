import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Poprawny import


const firebaseConfig = {
  apiKey: "AIzaSyCFflBFMH8GLRSLJ2iqvOW_Bkzh0ju54UU",
  authDomain: "todotable-c5740.firebaseapp.com",
  projectId: "todotable-c5740",
  storageBucket: "todotable-c5740.appspot.com",
  messagingSenderId: "1075637259347",
  appId: "1:1075637259347:web:995d06ea369cc04d60caa6"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };