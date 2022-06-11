import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBLZ4QPMTAwQ6SIfSkWjUjxjRSJR8_7XUE",
    authDomain: "project-67-a65d2.firebaseapp.com",
    databaseURL: "https://project-67-a65d2-default-rtdb.firebaseio.com",
    projectId: "project-67-a65d2",
    storageBucket: "project-67-a65d2.appspot.com",
    messagingSenderId: "896903841617",
    appId: "1:896903841617:web:00b02fbdf36abd0fa97570"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();