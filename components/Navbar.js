import React from "react";
import Link from "next/Link";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"}>
              <li className="mr-5 cursor-pointer hover:text-gray-400">Home</li>
            </Link>
            <Link href={"./blog"}>
              <li className="mr-5  cursor-pointer hover:text-gray-400">
                Blogs
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="mr-5 cursor-pointer hover:text-gray-400">
                Contact
              </li>
            </Link>
            <Link href={"/contact"}>
              <li>
                <AccountCircleRoundedIcon className="mr-5 hover:text-gray-400" />
              </li>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
