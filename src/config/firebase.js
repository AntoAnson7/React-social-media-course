
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCH2qKGXTXetKDzrBFQ2bTN0VgkuqdxsZY",
  authDomain: "postwall-8c29e.firebaseapp.com",
  projectId: "postwall-8c29e",
  storageBucket: "postwall-8c29e.appspot.com",
  messagingSenderId: "1033365864300",
  appId: "1:1033365864300:web:a1f6be587460136343fd49"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const provider = new GoogleAuthProvider()
export const db=getFirestore(app);