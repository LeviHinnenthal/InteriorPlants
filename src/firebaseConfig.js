import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9Z0clF8PC3TErk4ykfXnAeXHciNrwqPs",
  authDomain: "interiorplants-fc988.firebaseapp.com",
  projectId: "interiorplants-fc988",
  storageBucket: "interiorplants-fc988.appspot.com",
  messagingSenderId: "108586639322",
  appId: "1:108586639322:web:083a47293f6dd3327f6ae3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
