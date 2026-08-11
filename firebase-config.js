// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCDdmGM9W5XEDL-kZiVP_cJ8wniPzfFwig",
  authDomain: "test-rsc-cnt.firebaseapp.com",
  databaseURL: "https://test-rsc-cnt-default-rtdb.firebaseio.com",
  projectId: "test-rsc-cnt",
  storageBucket: "test-rsc-cnt.firebasestorage.app",
  messagingSenderId: "48737023040",
  appId: "1:48737023040:web:cb51e343b84225dd33dba5",
  measurementId: "G-Y1RJRLMWCQ"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
