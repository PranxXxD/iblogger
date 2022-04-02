import React, { useRef } from "react";
import styles from "../styles/signup.module.css";
import Button from "@material-ui/core/Button";
import { auth, firestore } from "../firebase/clientApp";
import { grey } from "@material-ui/core/colors";
// import { useForm } from "react-hook-form";
import firebase from "firebase/compat/app";

const signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault(); // avoid default behaviour

    // for creating the new user in database
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  //get the data of a existing user from database
  const SignIn = (e) => {
    e.preventDefault(); // avoid default behaviour

    firebase
      .auth()
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <form className={styles.container}>
        <h1>Sign In</h1>
        <hr
          style={{
            color: grey,
            backgroundColor: grey,
            height: 2,
            width: 462,
            marginBottom: 10,
          }}
        />
        <div className={styles.mb3}>
          <input
            ref={emailRef}
            className={styles.input}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className={styles.mb3}>
          <input
            ref={passwordRef}
            className={styles.input}
            type="password"
            placeholder="Password"
          />
        </div>
        <Button
          className={styles.signupbutton}
          color="secondary"
          variant="contained"
          type="submit"
          onClick={SignIn}
        >
          SignIn
        </Button>
        <h4>
          <span className={styles.signupScreen__gray}>New to iBlogger?</span>
          <span className={styles.signupScreen__link} onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default signup;
