import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDRYZbw4PFdtxxFmJSNQqP8P6_0fRD2chs",
    authDomain: "zooms-25f87.firebaseapp.com",
    projectId: "zooms-25f87",
    storageBucket: "zooms-25f87.appspot.com",
    messagingSenderId: "1044630740460",
    appId: "1:1044630740460:web:bc2d770e27d42a6c4374c9"
  };
  

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);