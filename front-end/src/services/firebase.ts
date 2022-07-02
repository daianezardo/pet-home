
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbHaa8cbUELq8OMPTjhAxC-8qUGuO_wiA",
  authDomain: "pet-home-7e8cd.firebaseapp.com",
  projectId: "pet-home-7e8cd",
  storageBucket: "pet-home-7e8cd.appspot.com",
  messagingSenderId: "744265294180",
  appId: "1:744265294180:web:4f7273b05c3326f4e81a71"
};


const app = initializeApp(firebaseConfig);

export 
const auth = getAuth(app)

export const db = getFirestore(app)