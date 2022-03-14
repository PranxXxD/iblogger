import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/blogpost.module.css";
import { ColoredLine } from "../../components/hr";

//step 1 : Find the file corresponding to the slug
//step 2: populate them inside the page

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router.query);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <ColoredLine color="black" />
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque aut
          non, quo vero distinctio sit, accusamus saepe autem dolorem laudantium
          consectetur itaque deserunt omnis, cum modi architecto dicta
          voluptatum inventore. Culpa rem soluta quod commodi similique mollitia
          veniam maxime nostrum assumenda dolore labore
        </div>

        <hr />
      </main>
    </div>
  );
};

export default Slug;
