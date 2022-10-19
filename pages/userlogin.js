import React from "react";
import { ColoredLine } from "../components/hr";
import Button from "@material-ui/core/Button";

const userlogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="">
        <h1>Login To View blog</h1>
        <ColoredLine color="grey" />
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="exampleInputEmail1" className="">
              Email address
            </label>
            <input
              type="email"
              className=""
              id="email"
              aria-describedby="emailHelp"
              name="email"
              required
            />
          </div>
          <div className="">
            <label htmlFor="phone" className="">
              Password
            </label>
            <input type="password" className="" id="password" name="password" />
          </div>

          {/* <button type="submit" className={styles.btn}>
            Submit
          </button> */}
          <Button className="" color="secondary" variant="contained">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default userlogin;
