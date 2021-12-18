// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import { firebaseConfig } from './config.js';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();