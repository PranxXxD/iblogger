import React from "react";
import Link from "next/Link";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useState } from "react";

const Navbar = () => {

  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="fixed container mx-auto bg-slate-300 flex p-5 flex-col md:flex-row items-center">
          <h4 className="ml-8 font-bold text-2xl text-sky-700">CodesBlog</h4>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap text-base ">
            <Link href={"/"}>
              <li className="mr-5 cursor-pointer hover:text-gray-400">Home</li>
            </Link>
            <Link href={"/blog"}>
              <li className="mr-5  cursor-pointer hover:text-gray-400">
                Blogs
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="mr-5 cursor-pointer hover:text-gray-400">
                Contact
              </li>
            </Link>


            {dropDown && (
              <div
                onMouseOver={() => {
                  setDropDown(true);
                }}
                onMouseLeave={() => {
                  setDropDown(false);
                }}
                className="fixed bg-white shadow-lg border-2 top-9 py-4 rounded-md px-6 w-46 z-30"
              >
                <ul className="flex-col justify-center items-center">
                  <Link href={"/myaccount"}>
                    
                      <li className="flex py-2 hover:text-violet-400 text-black text-md items-center font-medium">
                        <AccountCircleRoundedIcon className="mx-1" />
                        My Account
                      </li>
                  </Link>
                  <Link href={"/login"}>
                    <li
                      onClick=""
                      className="flex py-2 hover:text-violet-400 text-black text-md items-center font-medium"
                    >
                      Logout
                    </li>
                  </Link>
                </ul>
              </div>

            )}

            <AccountCircleRoundedIcon className="mx-1" />

          </nav>
        </div>

      </header>
    </>
  );
};

export default Navbar;
