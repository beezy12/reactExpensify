import * as firebase from 'firebase';

// config and intializeApp command was given to me by Firebase when I set up my database
const config = {
  apiKey: "AIzaSyAbkDIeBdU-jjHTdkqBUacVo8AfYjayGGU",
  authDomain: "expensify-1f8e4.firebaseapp.com",
  databaseURL: "https://expensify-1f8e4.firebaseio.com",
  projectId: "expensify-1f8e4",
  storageBucket: "expensify-1f8e4.appspot.com",
  messagingSenderId: "211236896892"
};

firebase.initializeApp(config);

// check database connection. firebase.database().ref() connects to the root of the db.
// here Im setting a test variable. to get it to run, import firebase/firebase in App.js,
// then check firebase
firebase.database().ref().set({
  name: 'beezy stums'
});

