import { Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, { useState } from "react";

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
    <section className="text-gray-600 body-font relative">
      <div className="flex flex-col container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-lg text-gray-600">
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Enter your name"
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-lg text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  aria-describedby="emailHelp"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-lg text-gray-600"
                >
                  Message
                </label>
                <textarea
                  placeholder="Leave a your concern here"
                  id="desc"
                  name="desc"
                  value={desc}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-500 rounded text-xl">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
