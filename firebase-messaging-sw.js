importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBv-Ou1IesxcrQokAnsG6w7O4XUzv9HiWE",
  authDomain: "rashin-app.firebaseapp.com",
  projectId: "rashin-app",
  storageBucket: "rashin-app.appspot.com",
  messagingSenderId: "369005441600",
  appId: "1:369005441600:web:0a6460a3b70df74b4065a5",
  measurementId: "G-VWJ7V2H94E"
})

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
//  console.log("onBackgroundMessage", message);
});