import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA5G47MPeoTRKUnAEJXDTV1mvIHO_UWWAI",
  authDomain: "resume-builder-1212.firebaseapp.com",
  projectId: "resume-builder-1212",
  storageBucket: "resume-builder-1212.appspot.com",
  messagingSenderId: "14638147314",
  appId: "1:14638147314:web:dbf331fdc824f439ce126b",
  measurementId: "G-7PLW62XQ44"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };