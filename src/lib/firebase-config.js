
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDE4RjLIbP-jJm5tqce-5pmSgDF-145M04",
  authDomain: "fir-crud-642f4.firebaseapp.com",
  projectId: "fir-crud-642f4",
  storageBucket: "fir-crud-642f4.appspot.com",
  messagingSenderId: "1019382477259",
  appId: "1:1019382477259:web:d2e55323f72de3bbb2064e",
  measurementId: "G-KN1KN2JP96"
};

// Initialize Firebase
const firebaseConfigApp = initializeApp(firebaseConfig);
export default firebaseConfigApp
