import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsaP943s2FQBq3dT6o1MWhzdzxLEVHfuI",
  authDomain: "portofolio-e27ee.firebaseapp.com",
  projectId: "portofolio-e27ee",
  storageBucket: "portofolio-e27ee.appspot.com",
  messagingSenderId: "833561489019",
  appId: "1:833561489019:web:0ab29003968631a618bcde",
  measurementId: "G-5D4HLBKBW1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);         // Firestore
export const storage = getStorage(app);      // Storage
export default app;
