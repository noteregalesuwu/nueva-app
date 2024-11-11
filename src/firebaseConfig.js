
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "xxxxxxxxx",
  authDomain: "xxx",
  projectId: "nutrias-chambeadoras",
  storageBucket: "xxxxxx",
  messagingSenderId: "xxxxx",
  appId: "xxxx",
  measurementId: "xxxxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
