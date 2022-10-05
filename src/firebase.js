import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAiWoVpL57r_9Eg_bHe_O9OAkqIkR7WmwI",
  authDomain: "my-selling-app-5cdd0.firebaseapp.com",
  projectId: "my-selling-app-5cdd0",
  storageBucket: "my-selling-app-5cdd0.appspot.com",
  messagingSenderId: "895798620990",
  appId: "1:895798620990:web:619b13dc2cde26e854326f",
  measurementId: "G-GF4JZWZK30"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth };