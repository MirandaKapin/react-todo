import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyASpesccyZvSmTSy0qnJO_UnxT-38875qs",
  authDomain: "miranda-todo-app.firebaseapp.com",
  databaseURL: "https://miranda-todo-app.firebaseio.com",
  storageBucket: "miranda-todo-app.appspot.com",
  messagingSenderId: "8447322006"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Miranda',
    age: 26
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snap) => {
  console.log('todo child_added', snap.key, snap.val());
});

var newTodoRef = (todoText) => {
  todosRef.push({
    text: todoText
  });
};

newTodoRef('Walk Dog');
newTodoRef('Go for a Run');
