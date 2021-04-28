import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB5LNidDub1rmJ6Sk2he41it5K74n3Dkos",
  authDomain: "todo-3a4b5.firebaseapp.com",
  projectId: "todo-3a4b5",
  storageBucket: "todo-3a4b5.appspot.com",
  messagingSenderId: "294295206507",
  appId: "1:294295206507:web:12b5084a36bb89b3b40f2e"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };