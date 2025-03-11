// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBimXe6WalCruo5wLJ9_1H_RFSYGz3k9Yw",
  authDomain: "netflix-gpt-dbca9.firebaseapp.com",
  projectId: "netflix-gpt-dbca9",
  storageBucket: "netflix-gpt-dbca9.firebasestorage.app",
  messagingSenderId: "66681424812",
  appId: "1:66681424812:web:69798400b3a78f22ed0809",
  measurementId: "G-L91C545JH4",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
