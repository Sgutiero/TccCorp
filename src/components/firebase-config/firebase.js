import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANwwoBOVrHNF_BcVorMl9kdu_DmUpAIlg",
  authDomain: "tcc-empresa.firebaseapp.com",
  projectId: "tcc-empresa",
  storageBucket: "tcc-empresa.appspot.com",
  messagingSenderId: "962613789757",
  appId: "1:962613789757:web:1a549dbdb39ffd0667d654"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);