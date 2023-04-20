import { BrandingWatermark } from "@mui/icons-material";
import Head from "next/head";
import Image from "next/image";
import Banner1 from "../assets/Banner1.jpg";
import webdevelopment from "../assets/webdevelopment.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { stringify } from "postcss";
import mongoose from "mongoose";
import Blogs from "../models/Blogs"
import Link from "next/Link";
import { SiBootstrap, SiCss3, SiFacebook, SiHtml5, SiInstagram, SiJavascript, SiJquery, SiLeetcode, SiLinkedin, SiNextdotjs, SiPinterest, SiReact, SiReddit, SiTailwindcss, SiTwitter } from "react-icons/si"
import {TbArrowMoveRight} from "react-icons/tb"


const Home = ({ BlogRes }) => {
  // console.log(JsBlog,PyBlog)

  return (
    <div className="">
      <Head>
        <title>CodesBlog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-auto">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto w-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                &lt;CodesBlog/&gt;
              </h1>
              <p>One place to find the every code</p>
              <div className="flex mt-4 justify-center">
                <div className="w-16 h-1 rounded-full bg-violet-500 inline-flex"></div>
              </div>
            </div>
            <div className="fixed top-[10rem] left-0 w-[3rem] min-h-full">
              <div className=" flex flex-col shadow-xl justify-center items-center p-3 space-y-5 rounded-md">
                <div className="flex flex-row hover:text-blue-500 text-sm font-light text-black  cursor-pointer "><SiFacebook className="text-xl" /></div>
                <div className="flex flex-row hover:text-blue-400 text-sm font-light text-black cursor-pointer"><SiTwitter className="text-xl" /></div>
                <div className="flex flex-row hover:text-blue-600 text-sm font-light text-black cursor-pointer"><SiLinkedin className="text-xl " /></div>
                <div className="flex flex-row hover:text-red-700  text-sm font-light text-black cursor-pointer"><SiReddit className="text-xl" /></div>
                <div className="flex flex-row hover:text-red-500  text-sm font-light text-black cursor-pointer"> <SiPinterest className="text-xl" /></div>
                <div className="flex flex-row hover:text-orange-500 text-sm font-light text-black cursor-pointer"><SiLeetcode className="text-xl" /></div>
                <div className="flex flex-row hover:text-pink-500 text-sm font-light text-black cursor-pointer"><SiInstagram className="text-xl" /></div>

              </div>
            </div>
            {/* Blog Content */}
            <div id="blog" className="flex ml-12 px-6 xl:px-0 py-0 flex-row w-1/2">
              <div className="mx-auto container">
                <div className="lg:fixed lg:top-1/3 lg:right-[9rem] w-[9rem] lg:min-h-full">
                  <div className="flex flex-col space-y-2">
                    <span className="text-xs font-semibold mb-2">CATEGORIES</span>
                    <div className="w-[22rem] grid grid-cols-3 md:w-[28rem] md:space-y-2 md:grid-cols-4 lg:flex lg:flex-col space-y-2">
                      <div className="flex flex-row hover:text-orange-500 text-sm font-light text-black mt-2  cursor-pointer"><SiHtml5 className="text-xl mr-4 " />HTML</div>
                      <div className="flex flex-row hover:text-blue-500 text-sm font-light text-black cursor-pointer"><SiCss3 className="text-xl mr-4" />CSS</div>
                      <div className="flex flex-row hover:text-violet-500 text-sm font-light text-black cursor-pointer"><SiBootstrap className="text-xl  mr-4" />BootStrap</div>
                      <div className="flex flex-row hover:text-blue-300 text-sm font-light text-black cursor-pointer"><SiTailwindcss className="text-xl mr-4" />Tailwind</div>
                      <div className="flex flex-row hover:text-yellow-500  text-sm font-light text-black cursor-pointer"><SiJavascript className="text-xl mr-4" />JavaScript</div>
                      <div className="flex flex-row hover:text-orange-300  text-sm font-light text-black cursor-pointer"> <SiJquery className="text-xl mr-4" />Jquery</div>
                      <div className="flex flex-row hover:text-blue-400 text-sm font-light text-black cursor-pointer"><SiReact className="text-xl mr-4" />React.js</div>
                      <div className="flex flex-row hover:text-black text-sm font-light text-gray-600 cursor-pointer"><SiNextdotjs className="text-xl mr-4" />Next.js</div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:ml-[10rem] ">
                  <div className="w-[20rem] grid md:w-[40rem] md:max-w-xl md:grid-cols-2 lg:grid-cols-1 gap-6 cursor-pointer">
                    {Object.keys(BlogRes).map((item, key) => {
                      return (
                        <div key={key}>
                          <Image
                            className="w-full rounded-t-2xl"
                            src={Banner1}
                            alt="JavaScript"
                          />
                          <div className="py-2 px-4 w-full flex justify-between bg-violet-700">
                            <p className="text-sm text-white font-sans tracking-wide">
                              {BlogRes[item].category}
                            </p>
                            <p className="text-sm text-white font-sans tracking-wide">
                              {BlogRes[item].createdAt}

                            </p>
                          </div>
                          <div className="bg-white px-10 py-6 rounded-bl-xl rounded-br-xl">
                            <h1 className="text-xl text-gray-900 font-semibold tracking-wider">
                              {BlogRes[item].title}
                            </h1>
                            <p className="text-gray-700 text-sm lg:text-sm  lg:leading-8 tracking-wide mt-6 w-11/12">
                              {BlogRes[item].desc.substr(0, 50)}
                            </p>
                            <div className="w-full mt-4 justify-end flex items-center cursor-pointer hover:text-indigo-500">
                              <Link href={`/blogpost/${BlogRes[item].slug}`}><p className="text-base tracking-wide ">
                                Read more
                              </p></Link>
                             <TbArrowMoveRight className="w-10 text-2xl"/>
                            </div>
                            <div className="h-5 w-2" />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              View More
            </button>
          </div>
        </section>

        <section className="text-gray-600 body-font overflow-hidden ">
          <div className="flex container px-5 py-24 mx-auto w-1/2">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    12 Jun 2019
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Bitters hashtag waistcoat fashion axe chia unicorn
                  </h2>
                  <p className="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <a className="text-indigo-500 inline-flex items-center mt-4">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}


// Fetching the blogs from server

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  const BlogRes = await Blogs.find();

  const [blogs] = await Promise.all([
    BlogRes
  ]);
  return {
    props: {
      BlogRes: JSON.parse(JSON.stringify(blogs)),
    }, // will be passed to the page component as props
  };
  // JsBlog: JSON.parse(JSON.stringify(JsBlog)),
}

export default Home;
