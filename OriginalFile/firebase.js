import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
	getAuth,
	createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const auth = getAuth();

login.addEventListener("click", (e) => {
	var email = document.getElementById("em").value;
	var email = document.getElementById("pass").value;

	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			alert("user created");
			// ... user.uid
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;

			alert("errorMessage");
			// ..
		});
});
