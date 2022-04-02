import React from "react";

const signupcopy = () => {
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
              ref={emailRef}
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
              ref={phoneRef}
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
              ref={passwordRef}
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
              ref={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
          </div>
          <Button
            className={styles.signupbutton}
            color="secondary"
            variant="contained"
            type="submit"
            onClick={handleSubmit}
          >
            SignUp
          </Button>
        </form>
      </div>
    </div>
  );
};

export default signupcopy;
