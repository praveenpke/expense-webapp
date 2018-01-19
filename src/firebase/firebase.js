
import * as firebase from "firebase";


var config = {
    apiKey: "AIzaSyB0K0K0Ayt2D41AfsdnQ7kz_NfJ2mUfGrs",
    authDomain: "expensify-f8d7c.firebaseapp.com",
    databaseURL: "https://expensify-f8d7c.firebaseio.com",
    projectId: "expensify-f8d7c",
    storageBucket: "expensify-f8d7c.appspot.com",
    messagingSenderId: "766336871557"
  };

  firebase.initializeApp(config);


  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };











