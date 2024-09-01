import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyD6DixkF617-B1qpBaH_l37DIw1VCoAbF4",
   authDomain: "water-wise-eb4bb.firebaseapp.com",
   projectId: "water-wise-eb4bb",
   storageBucket: "water-wise-eb4bb.appspot.com",
   messagingSenderId: "156866660184",
   appId: "1:156866660184:web:894e571272ee19e2ce472d"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };