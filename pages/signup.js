//next js related
import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
//components
import Error from "../components/Error";
import Loading from "../components/Loading";
import Card from "../components/Card";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link"
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { SupervisorAccountRounded } from "@mui/icons-material";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("myuser")) {
      router.push("/");
    }
  }, []);

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };
  // const authConfig = uiConfig(firebase);
  const handleSubmit = async ()=>{
    e.preventDefault();

    const data = {name,email,password};
    let res  = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`,{
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json()
    // console.log(response);
    setEmail("");
    setName("");
    setPassword("");
    toast("Your account has been created succesfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "success",
    });
  }

  return (
    <div>
    <Head>
      <title>streetWear.com</title>
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
      />
    </Head>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            {/* <Image width={80} height={60} src=""/> */}
          </div>
          <h2 className="mt-5 text-center text-3xl font-extrabold text-gray-900">
            Signup in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link href={"/userlogin"}>
              <span className="font-medium text-[#3B82F6] hover:text-violet-500 mx-2 cursor-pointer">
                SignIn
              </span>
            </Link>
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
          method="POST"
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
          <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                value={name}
                onChange={handleChange}
                id="name"
                name="name"
                type="name"
                autocomplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                value={email}
                onChange={handleChange}
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                value={password}
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link href={"/forgotpwd"}>
                <a className="font-medium text-violet-600 hover:text-violet-500">
                  Forgot your password
                </a>
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-400"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <!-- Heroicon name: solid/lock-closed --> */}
                <SupervisorAccountRounded/>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Signup;
