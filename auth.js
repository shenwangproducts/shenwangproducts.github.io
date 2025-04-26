
import { 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const login = () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("Login successful!");
        // เปลี่ยนไปหน้า main.html หรือทำอะไรก็ได้
    })
    .catch((error) => {
        alert(error.message);
    });
};

const signup = () => {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("Signup successful! Now you can login.");
        window.location.href = "login.html"; // ย้อนกลับไปหน้าล็อกอิน
    })
    .catch((error) => {
        alert(error.message);
    });
};
