import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDp4hWfZCYgw-j0pCht6R_ZIeMVYJbfykk",
  authDomain: "letus-pata.firebaseapp.com",
  projectId: "letus-pata",
  storageBucket: "letus-pata.appspot.com",
  messagingSenderId: "253817625583",
  appId: "1:253817625583:web:0e5b2bf1c6904f29e7b41a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;