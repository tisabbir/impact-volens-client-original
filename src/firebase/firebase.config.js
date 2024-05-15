// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyA-_Msa63g0yMEpJds_SRxCwmm3hM1zIN4",
//   authDomain: "impact-volens.firebaseapp.com",
//   projectId: "impact-volens",
//   storageBucket: "impact-volens.appspot.com",
//   messagingSenderId: "687310745368",
//   appId: "1:687310745368:web:b1fb0a35416147f6a1786d"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;