// // /config/firebaseAuthUI.config.js
// import "firebaseui/dist/firebaseui.css";
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// const provider = new GoogleAuthProvider();

// const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
// export const uiConfig = (firebase) => {
//   return {
//     signInFlow: "popup",
//     signInSuccessUrl: "/",
//     tosUrl: "/terms-of-service",
//     privacyPolicyUrl: "/privacy-policy",
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       firebase.auth.GithubAuthProvider.PROVIDER_ID,
//     ],
//   };
// };
