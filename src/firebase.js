import { initializeApp } from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyChLqDoErmB2FCbT4IlsXAsy11jnfPVCkU",
  authDomain: "ofp-mb-auto.firebaseapp.com",
  databaseURL: "https://ofp-mb-auto-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ofp-mb-auto",
  storageBucket: "ofp-mb-auto.appspot.com",
  messagingSenderId: "542653622734",
  appId: "1:542653622734:web:1c5a6ae2279af0f1b4239f",
  measurementId: "G-0FWF3WK0VE"
};
  
const app = initializeApp(firebaseConfig);

const db = getDatabase(app)
export default db;