 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyARmAbokH_mwpxVdK2CvJujzY2fZAuzG2A",
    authDomain: "rkemp-project.firebaseapp.com",
    projectId: "rkemp-project",
    storageBucket: "rkemp-project.firebasestorage.app",
    messagingSenderId: "707655946298",
    appId: "1:707655946298:web:6dec96225b918585832503",
    measurementId: "G-Z53L8LY08M"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);