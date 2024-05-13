// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCulzHafKSNgmn0GYvGbFZHKelRXKeJLV4",
  authDomain: "activitat-react.firebaseapp.com",
  projectId: "activitat-react",
  storageBucket: "activitat-react.appspot.com",
  messagingSenderId: "206705837289",
  appId: "1:206705837289:web:beb76fef820d4fba481c78",
  measurementId: "G-BRY6LWZHWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//instancia firestore
const db = getFirestore(app);
console.log("firestore: "+JSON.stringify(db));

export default db;