// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzxiiy4d3zVFFe-B1T597BaDf3qAiwx_0",
  authDomain: "solo-travel-guide.firebaseapp.com",
  projectId: "solo-travel-guide",
  storageBucket: "solo-travel-guide.appspot.com",
  messagingSenderId: "648697647713",
  appId: "1:648697647713:web:1367d5ce25dabe03981020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const  auth = getAuth(app);

export default auth;