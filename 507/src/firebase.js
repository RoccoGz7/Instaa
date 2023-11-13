import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyC8jNJpFV61dqqBbRL6EY51O8xnptreSk0",
    authDomain: "insta-944b4.firebaseapp.com",
    projectId: "insta-944b4",
    storageBucket: "insta-944b4.appspot.com",
    messagingSenderId: "761540030528",
    appId: "1:761540030528:web:f05fb2bfdc8c989855afa5"
  };

const app = initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const storage =firebaseApp.storage();
const db = firebaseApp.firestore();

export {db, auth, storage};