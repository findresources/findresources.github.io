import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js'
import {GoogleAuthProvider , signInWithPopup , getAuth} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js'

const firebaseConfig = {
    apiKey: "AIzaSyCtcqRFXVFbGKfKtdYFuahQzAgMkG2g6n0",
    authDomain: "resourcelocator-534e2.firebaseapp.com",
    projectId: "resourcelocator-534e2",
    storageBucket: "resourcelocator-534e2.appspot.com",
    messagingSenderId: "850811692429",
    appId: "1:850811692429:web:4845f38874637bbcae49c4",
    measurementId: "G-F41S6ZMER2"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

const google = document.getElementById('google');

google.addEventListener('click', () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider();
  
  signInWithPopup(auth , provider)
})