import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAXVtdiz6S8jSD1SCh5QltB6FOAKPZAYrI",
    authDomain: "clone-a50bb.firebaseapp.com",
    projectId: "clone-a50bb",
    storageBucket: "clone-a50bb.appspot.com",
    messagingSenderId: "1050649874967",
    appId: "1:1050649874967:web:2f10161625aaba6bfe8252",
    measurementId: "G-BYQ5MN91XR"
  };


  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};