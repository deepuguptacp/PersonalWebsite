import firebase from "firebase";
import "firebase/auth";
import "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCu0i5ANHUlmCntSDbwmfaLdyjrP_I0RLc",
  authDomain: "personal-website-2bfdd.firebaseapp.com",
  projectId: "personal-website-2bfdd",
  storageBucket: "personal-website-2bfdd.appspot.com",
  messagingSenderId: "277731005265",
  appId: "1:277731005265:web:edf3d0e8674c53da297970",
  measurementId: "G-TYH4R4YTT9",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();
export default {
  firebaseConfig,
};
