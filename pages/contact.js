import { Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, { useState } from "react";
import styles from "../styles/contact.module.css";

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    // prevent refreshing the page after submiting
    e.preventDefault();
    // console.log(name, phone, email, desc);

    // fetch the post req from the from
    const data = { name, email, phone, desc };
    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        // display alert window after submitting
        alert("Thank you for contacting us");
        // refers the input values of each field
        setName("");
        setEmail("");
        setPhone("");
        setDesc("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // set the values of the input fields on a real time typing
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Contact US</h1>
      <hr
        style={{
          color: grey,
          backgroundColor: grey,
          height: 2,
          width: 462,
          marginBottom: 10,
        }}
      />
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Name
          </label>
          <input
            type="name"
            className={styles.input}
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <div id="name" className="form-text"></div>
        </div>
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
          <div id="emailHelp" className={styles.formtext}>
            We'll never share your email with anyone else.
          </div>
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
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.formlabel}>
            Comments
          </label>
          <textarea
            className={styles.input}
            placeholder="Leave a your concern here"
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
          />
        </div>
        <Button
          className={styles.loginbutton}
          color="secondary"
          variant="contained"
        >
          Contact Us
        </Button>
      </form>
    </div>
  );
};

export default contact;
