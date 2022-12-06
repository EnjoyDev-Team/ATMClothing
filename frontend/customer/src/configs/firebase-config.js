// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCG3XedNU-Vh-WwiYEHFQHA2oCaRhvooPg',
  authDomain: 'atmclothing-5854d.firebaseapp.com',
  projectId: 'atmclothing-5854d',
  storageBucket: 'atmclothing-5854d.appspot.com',
  messagingSenderId: '572104811021',
  appId: '1:572104811021:web:451826f174338e5dd4eb44',
  measurementId: 'G-E9ZEKJB7X1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
