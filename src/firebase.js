import firebase from "firebase/compat/app";
import "firebase/compat/auth"   
import "firebase/compat/firestore"

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB-pYIT0W-azyxWE7pP4OzsGMdd9K3ivq4",
  authDomain: "clone-41de0.firebaseapp.com",
  projectId: "clone-41de0",
  storageBucket: "clone-41de0.appspot.com",
  messagingSenderId: "383413929770",
  appId: "1:383413929770:web:2620e52166bacd85ef4053",
  measurementId: "G-BTE2TQZVHE"
  });
  const db=firebase.firestore();
  const auth=  firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  

  export {db,auth,provider}  