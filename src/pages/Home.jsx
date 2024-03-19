import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id: "1",
  //     title: "Post Title",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
  //     img: "https://picsum.photos/id/1/300/200",
  //   },
  //   {
  //     id: "2",
  //     title: "Post Title",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
  //     img: "https://picsum.photos/id/45/300/200",
  //   },
  //   {
  //     id: "3",
  //     title: "Post Title",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
  //     img: "https://picsum.photos/id/5/300/200",
  //   },
  //   {
  //     id: "4",
  //     title: "Post Title",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
  //     img: "https://picsum.photos/id/75/300/200",
  //   },
  // ];
  const getText = (html, limit = 100) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    let text = doc.body.textContent || "";
    if (text.length > limit) {
      text = text.substring(0, limit) + "..."; // Agrega '...' al final si el texto es más largo que el límite
    }
    return text;
  };
  return (
    <div className="home">
      
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex flex-col-reverse items-center">
        {posts.map((post) => (
          <Link
            to={`/post/${post.id}`}
            className=" w-full flex flex-col items-center justify-between mx-10  md:flex-row p-4 odd:md:flex-row-reverse dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-4 hover:bg-amber-50 hover:rounded-lg "
            key={post.id}
          >
            <img
              className="object-cover w-full aspect-[4/3]  h-96 md:h-60 md:w-96 rounded-lg "
              src={post.img}
              alt={`${post.title}`}
            />

            <div className="flex w-full flex-col content-between p-4 leading-normal">
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {getText(post.title)}
              </h1>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {getText(post.desc, 300)}
              </p>

              <p className="border-t flex justify-center">En savoir plus</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
