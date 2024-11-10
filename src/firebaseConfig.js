
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl54mZdeyMRL8gf4WKUxkC96b8HaY28hg",
  authDomain: "nutrias-chambeadoras.firebaseapp.com",
  projectId: "nutrias-chambeadoras",
  storageBucket: "nutrias-chambeadoras.firebasestorage.app",
  messagingSenderId: "1003209735962",
  appId: "1:1003209735962:web:55cc121df1cff1ed1076a3",
  measurementId: "G-MZNGQJY4DK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };