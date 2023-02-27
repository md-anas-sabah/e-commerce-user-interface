import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCemxdvuOpP1eqhwajm3U882gYTZceNix8",
  authDomain: "muroexe-f6de3.firebaseapp.com",
  projectId: "muroexe-f6de3",
  storageBucket: "muroexe-f6de3.appspot.com",
  messagingSenderId: "24150291342",
  appId: "1:24150291342:web:21de1fe070cb7fc4fa6adf",
  measurementId: "G-4SWEZC97M3",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase;
