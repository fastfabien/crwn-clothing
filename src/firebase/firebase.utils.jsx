// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import {  } from "firebase/firestore/lite";
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc, deleteDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfYOsDP8CugVZkibYFOrtYDyWYoIwp-e0",
  authDomain: "db-crown-417b3.firebaseapp.com",
  projectId: "db-crown-417b3",
  storageBucket: "db-crown-417b3.appspot.com",
  messagingSenderId: "77938738028",
  appId: "1:77938738028:web:13da63836e55e542396949"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider=new GoogleAuthProvider()
const usersCollectionRef = collection(db, "users");

export const createUserProfilDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const uid = userAuth.uid;
  const test = await getDocs(usersCollectionRef)
  if(!uid.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(doc(db, 'users', uid), { displayName, email, createAt, ...additionalData })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }
  return uid;
}

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    // console.log(result)
  }).catch((error) => {
    // console.log(error)
  })
};

export {db, auth, storage};