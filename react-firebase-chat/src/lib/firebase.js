// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {  getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-a3bdd.firebaseapp.com",
  projectId: "reactchat-a3bdd",
  storageBucket: "reactchat-a3bdd.appspot.com",
  messagingSenderId: "35163089373",
  appId: "1:35163089373:web:71683ff74ca5fdb1b8ee34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
