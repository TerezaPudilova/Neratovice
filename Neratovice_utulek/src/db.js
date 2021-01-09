import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB03i_COjp_lJljACV3LntfFiYjfoqC-a8",
  authDomain: "neratovice-f5df9.firebaseapp.com",
  projectId: "neratovice-f5df9",
  storageBucket: "neratovice-f5df9.appspot.com",
  messagingSenderId: "885762896825",
  appId: "1:885762896825:web:ed1f5e4210ece0cc197c68",
  measurementId: "G-0VE6L2CYJJ"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
