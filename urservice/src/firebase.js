import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyANpWXwy9j14aUd64jwC3U_l33-G-0LkAg",
  authDomain: "atyourservicecapstone2-148b2.firebaseapp.com",
  databaseURL:
    "https://atyourservicecapstone2-148b2-default-rtdb.firebaseio.com",
  projectId: "atyourservicecapstone2-148b2",
  storageBucket: "atyourservicecapstone2-148b2.appspot.com",
  messagingSenderId: "842355435524",
  appId: "1:842355435524:web:eaf7b2ccd773ea846f6d51",
  measurementId: "G-DC6R0N8FTR",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
