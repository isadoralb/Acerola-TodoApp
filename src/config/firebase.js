import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


  const firebaseConfig = {
    apiKey: "AIzaSyArlr8jwlpsXsv8iSLBkpWqjQaxFoEtpdo",
    authDomain: "todoapp-5a492.firebaseapp.com",
    projectId: "todoapp-5a492",
    storageBucket: "todoapp-5a492.appspot.com",
    messagingSenderId: "373668973322",
    appId: "1:373668973322:web:9a60ccc9c77d92176808f3"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);