import React from "react";
import styles from "../styles/userlogin.module.css";
import { ColoredLine } from "../components/hr";
import Button from "@material-ui/core/Button";

const userlogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className={styles.container}>
        <h1>Login To View blog</h1>
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
              required
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formlabel}>
              Password
            </label>
            <input
              type="password"
              className={styles.input}
              id="password"
              name="password"
            />
          </div>

          {/* <button type="submit" className={styles.btn}>
            Submit
          </button> */}
          <Button
            className={styles.loginbutton}
            color="secondary"
            variant="contained"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default userlogin;
