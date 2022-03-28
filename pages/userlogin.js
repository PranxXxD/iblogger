import React from "react";
import styles from "../styles/contact.module.css";

const userlogin = () => {
  return (
    <div>
      {" "}
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
              value={email}
              onChange={handleChange}
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
              value={password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default userlogin;
