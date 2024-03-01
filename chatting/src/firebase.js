
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB9c-earj1ThCuzItPx3irBVsoF2C_CWtA",
    authDomain: "chatting-2c4c6.firebaseapp.com",
    projectId: "chatting-2c4c6",
    storageBucket: "chatting-2c4c6.appspot.com",
    messagingSenderId: "631806294633",
    appId: "1:631806294633:web:484fd17f57c793092640f8"
  };
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
