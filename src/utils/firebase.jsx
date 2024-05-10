// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAQeuMjW1OEz8Odc30TJqtTtwqoy6fkFYY",
  authDomain: "netflix-gpt-bcdf3.firebaseapp.com",
  projectId: "netflix-gpt-bcdf3",
  storageBucket: "netflix-gpt-bcdf3.appspot.com",
  messagingSenderId: "364627122240",
  appId: "1:364627122240:web:3bd71e165b3c5bb6e667a5",
  measurementId: "G-74QPS3D8ZP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();