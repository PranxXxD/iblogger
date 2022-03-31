import React from "react";
import { ColoredLine } from "../components/hr";
import styles from "../styles/signup.module.css";
import Button from "@material-ui/core/Button";
import { firestore } from "../firebase/clientApp";
import { useState } from "react";
import { doc } from "@firebase/firestore"; // for creating a pointer to our Document
import { setDoc } from "firebase/firestore"; // for adding the Document to Collection
import { async } from "@firebase/util";

const signup = () => {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();

  const handleSubmit = () => {
    e.preventDefault(); // avoid default behaviour

    if (!email || !phone || !password) {
      // check for any null value
      alert("All fields are required");
    }

    const addUser = async () => {
      exports.getTimeStamp = functions.https.onRequest((req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify({ timestamp: Date.now() }));
      });
      const _users = doc(firestore, `users/${Timestamp}`);

      const users = {
        email,
        phone,
        password,
      };
      try {
        await setDoc(_users, users);
        alert("Your account as been created successfully ");
        setTitle("");
        setDescription("");
      } catch (error) {
        //show an error message
        alert("An error occured while creating an account");
      }
    };
  };

  return (
    <div>
      <div className={styles.container}>
        <h1>Sign Up Now</h1>
        <ColoredLine color="grey" />
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="exampleInputEmail1" className={styles.formlabel}>
              Email address
            </label>
            <input
              type="email"
              className={styles.input}
              id="email"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formlabel}>
              Phone
            </label>
            <input
              type="phone"
              className={styles.input}
              id="phone"
              name="phone"
              value={phone}
              // onChange={handleChange}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="password" className={styles.formlabel}>
              Password
            </label>
            <input
              type="password"
              className={styles.input}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="cpassword" className={styles.formlabel}>
              Confirm Password
            </label>
            <input
              type="password"
              className={styles.input}
              id="cpassword"
              name="cpassword"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
          </div>
          {/* 
          <button type="submit" className={styles.btn}>
            Submit
          </button> */}
          <Button
            className={styles.signupbutton}
            color="secondary"
            variant="contained"
            type="submit"
          >
            SignUp
          </Button>
        </form>
      </div>
    </div>
  );
};

export default signup;
