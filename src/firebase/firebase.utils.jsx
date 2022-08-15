// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCac6xKy_WiJRQpuge4-lMwnt4A0_mNcRs",
  authDomain: "crwn-db-9f934.firebaseapp.com",
  projectId: "crwn-db-9f934",
  storageBucket: "crwn-db-9f934.appspot.com",
  messagingSenderId: "663335027314",
  appId: "1:663335027314:web:a8a810b446d0110d5db8eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider=new GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    // console.log(result)
  }).catch((error) => {
    // console.log(error)
  })
};

export {db, auth, storage};