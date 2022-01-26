import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

  apiKey: "AIzaSyAJk1LeZUM0xle7YtXrIPhIhGcWIOGR_6w",
  authDomain: "fruit-catcher-971de.firebaseapp.com",
  databaseURL: "https://fruit-catcher-971de-default-rtdb.firebaseio.com",
  projectId: "fruit-catcher-971de",
  storageBucket: "fruit-catcher-971de.appspot.com",
  messagingSenderId: "833509704531",
  appId: "1:833509704531:web:fd97aa74e353ea213b17a6",
  measurementId: "G-6JF4RP4G66"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();