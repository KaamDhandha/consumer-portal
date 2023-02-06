// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getMessaging} from "firebase/messaging"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZx_sZErAKHhQhX1SSJ6cDcifiSoM616I",
  authDomain: "kaam-dhandha-d1186.firebaseapp.com",
  projectId: "kaam-dhandha-d1186",
  storageBucket: "kaam-dhandha-d1186.appspot.com",
  messagingSenderId: "258444896543",
  appId: "1:258444896543:web:1bee6ff38b51df1c0ae82a",
  measurementId: "G-SLGT1XLECK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const messaging = getMessaging(app);