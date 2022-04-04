import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { firebaseConfig } from "../config/firebaseApp.config";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: String(process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY),
//   authDomain: String(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
//   projectId: String(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
//   storageBucket: String(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
//   messagingSenderId: String(process.env.NEXT_PUBLIC_FIREBASE_ESSAGE_SENDER_ID),
//   appId: String(process.env.NEXT_PUBLIC_FIREBASE_APP_ID),
//   measurementId: String(process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID),
// };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

export default { firebase };
