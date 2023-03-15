import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ColoredLine } from "../../components/hr";
import Banner1 from "../../assets/Banner1.jpg";
import Image from "next/image";
import Blogs from "../../models/Blogs";
import mongoose from "mongoose";
import { ContentCopyOutlined, CopyAllOutlined } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";


//step 1 : Find the file corresponding to the slug
//step 2: populate them inside the page

const Slug = ({ allblogs }) => {
  const router = useRouter();
  // console.log(router.query);

  // const [blog, setBlog] = useState(props.myBlog);

  const copyCard = async () => {
    let card = document.querySelector(".card");
    let range = document.createRange();
    range.selectNode(card);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    // alert("Card copied to clipboard!");
    toast.success("Card copied to clipboard", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 1,
      theme: "light",
      type: "success"
    });
  }

  // //display the markup code in text fromat
  // function createMarkup(c) {
  //   return { __html: c };
  // }
  // useEffect(() => {
  //   // Runs the code until the router is ready
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   // console.log("UseEffect is running");
  //   // fetching the data and parsing into a json format
  //   fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setBlog(parsed);
  //     });
  // }, [router.isReady]);

  return (
    <>
      {/* <div>{blog && blog.content}</div> */}
      <ToastContainer/>
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <Image
              className="lg:w-2/6 md:w-3/6 m-20 object-cover object-center rounded-2xl"
              alt=""
              src={Banner1}
              width={900}
              height={400}
            />
            <h1 className="title-font sm:text-4xl text-3xl m-6 font-medium text-gray-900">
              {allblogs.title}
            </h1>
            <hr />
            <div
              className="text-left w-full mb-8 py-4 leading-relaxed text-md font-semibold text-gray-900 font-sans p-2"
            // dangerouslySetInnerHTML={createMarkup(allblogs.desc)}
            >{allblogs.desc.substr(0, 121)}
              <div className="mt-4 font-sans text-sm text-gray-700">
                {allblogs.desc.substr(122, 138)}
                <div className="mt-4">
                  <div className="flex w-full place-content-evenly text-sm md:text-md pt-3 pb-3 rounded-t-md bg-slate-500 text-slate-200">
                    Basic JavaScript
                    <button className="flex flex-row place-content-center ml-12 md:ml-[24rem] lg:ml-[30rem] z-20 text-slate-200 hover:text-indigo-200" onClick={() => {
                      copyCard()
                    }}>
                      <CopyAllOutlined />
                      {/* <ContentCopyOutlined/> */}
                      Copy Card</button>
                  </div>
                  <div className="card flex flex-col justify-between max-w-6xl p-12  bg-slate-200 rounded-md shadow-md">
                    {/* <Image className="max-w-full" src="" alt="Card image"/> */}
                    <div className="card-body">
                      <h5 className="card-title text-md font-sans mb-4">{allblogs.title}:- variables</h5>
                      <p className="card-text font-sans text-sm m-0 ">{allblogs.desc.substring(260, 270)}</p>
                      <p className="card-text font-sans text-sm m-0 ">{allblogs.desc.substring(271, 282)}</p>
                      <p className="card-text font-sans text-sm m-0 ">{allblogs.desc.substring(283, 296)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
// Method for the Server side Rendereing
export async function getServerSideProps(context) {
  // console.log(context.query);
  let error = null
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let allblogs = await Blogs.findOne({ slug: context.query.slug });
  // console.log(context.query.slug)
  //display the error msg if user accessing the product which is not in database
  if (allblogs == null) {
    return {
      props: {
        error: 404,
      }, // will be passed to the page component as props
    };
  }


  ; //context.query is an object of the query string passed in the page's URL

  return {
    props: {
      allblogs: JSON.parse(JSON.stringify(allblogs)),
    }, // will be passed to the page component as props
  };
}

// Method for the Static side Rendering

// export async function getStaticPaths() {
//   // Dynamically fetcing data from the blogdata
//   let allblg = await fs.promises.readdir(`blogdata`);
//   allblg = allblg.map((item) => {
//     // console.log(item);
//     return { params: { slug: item.split(".")[0] } };
//   });
//   return {
//     paths: allblg,
//     fallback: true, // false or 'blocking'
//   };
// }
// // sends props to the server to fetch the whole data
// export async function getStaticProps(context) {
//   // console.log(context);
//   const { slug } = context.params;

//   let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
//   return {
//     props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
//   };
// }

export default Slug;
