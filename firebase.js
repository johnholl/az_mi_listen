// Import the functions you need from the SDKs you need
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEIXOpsCFvJa9OuezuSIM3ARHNnD12cOM",
  authDomain: "aztomi-connection.firebaseapp.com",
  projectId: "aztomi-connection",
  storageBucket: "aztomi-connection.appspot.com",
  messagingSenderId: "843850439745",
  appId: "1:843850439745:web:b062a8f1152163afa1fac0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();