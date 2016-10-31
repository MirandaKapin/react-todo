import firebase from 'firebase';
// Initialize Firebase

try {
  var config = {
    apiKey: "AIzaSyASpesccyZvSmTSy0qnJO_UnxT-38875qs",
    authDomain: "miranda-todo-app.firebaseapp.com",
    databaseURL: "https://miranda-todo-app.firebaseio.com",
    storageBucket: "miranda-todo-app.appspot.com",
    messagingSenderId: "8447322006"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
