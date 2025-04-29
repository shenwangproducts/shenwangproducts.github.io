// ใส่ config Firebase ของโปรเจคคุณตรงนี้
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAT7SebrpGQlmGpL78Hc1tU8tHoX9LdIYg",
  authDomain: "platform-dabc0.firebaseapp.com",
  projectId: "platform-dabc0",
  storageBucket: "platform-dabc0.firebasestorage.app",
  messagingSenderId: "210971684025",
  appId: "1:210971684025:web:e2186cde81b2c07da37f68",
  measurementId: "G-NJRHYHQ26D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.auth = auth; // export auth ไปใช้ใน auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-UwBguZRGdrIWLVkTsCRlt02vKOAlOlA",
  authDomain: "shenwang-auth-user.firebaseapp.com",
  projectId: "shenwang-auth-user",
  storageBucket: "shenwang-auth-user.firebasestorage.app",
  messagingSenderId: "273542969972",
  appId: "1:273542969972:web:4d6ce4edf5188b98dbef21"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
