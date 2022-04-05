//next js related
import React from "react";
import { useRouter } from "next/router";
// firebase related
import { useAuthState } from "react-firebase-hooks/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth, firebase } from "../Firebase/clientApp";
import { uiConfig } from "../config/firebaseAuthUI.Config";

//components
import Error from "../components/Error";
import Loading from "../components/Loading";
import Card from "../components/Card";

import styles from "../styles/signup.module.css";
import { grey } from "@material-ui/core/colors";

const signup = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (loading) return <Loading />;
  else if (error) return <Error msg={error} />;
  else if (user) {
    // user is already logged in, redirect to home page
    router.push("/");
  }

  const authConfig = uiConfig(firebase);

  return (
    <div>
      <div className={styles.container}>
        <Card>
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
          <StyledFirebaseAuth uiConfig={authConfig} firebaseAuth={auth} />
        </Card>
      </div>
    </div>
  );
};

export default signup;
