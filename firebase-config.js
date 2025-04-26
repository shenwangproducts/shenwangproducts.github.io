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
