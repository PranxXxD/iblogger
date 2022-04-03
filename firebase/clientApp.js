// // Start by importing initializeApp from the Firebase package.
// // Import getFirestore from firebase.

// import { getFirestore } from "firebase/firestore";

// // Call the initializeApp function and pass in your credentials as listed in the env.local file:
// initializeApp({
//   apiKey: "AIzaSyDKt4rF-bUpWZk2Wxv1oaTijG0KpHFxUTw",
//   authDomain: "iblogger-1a5c4.firebaseapp.com",
//   projectId: "iblogger-1a5c4",
//   storageBucket: "iblogger-1a5c4.appspot.com",
//   messagingSenderId: "521434587365",
//   appId: "1:521434587365:web:87756524071740a092f40c",
//   measurementId: "G-CQDWEKDQ29",
// });

// // Create a Firestore instance.

// const firestore = getFirestore();

// // Export firestore so that it can be accessible by the files that we will create later in this project.
// export { firestore };

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// console.log(firebase.auth);

const app = firebase.initializeApp({
  apiKey: "AIzaSyDKt4rF-bUpWZk2Wxv1oaTijG0KpHFxUTw",
  authDomain: "iblogger-1a5c4.firebaseapp.com",
  projectId: "iblogger-1a5c4",
  storageBucket: "iblogger-1a5c4.appspot.com",
  messagingSenderId: "521434587365",
  appId: "1:521434587365:web:87756524071740a092f40c",
  measurementId: "G-CQDWEKDQ29",
});

// const App = initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth(app);

export { auth };

export default db;
