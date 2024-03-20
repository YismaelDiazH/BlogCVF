import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api-blogcv.onrender.com/api/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  return (
    <div>
      <p className="text-lg font-bold text-gray-900 md:text-xl lg:text-2xl leading-none tracking-tight dark:text-white mb-2">
        Other post you may like
      </p>
      {posts.map((post) => (
        <Link to={`/post/${post.id}`}>
         <div className="hover:bg-stone-200 rounded-lg p-2 mb-4" key={post.id}>
          <img
            src={post?.img}

            alt={`${post.title}`}
            className="md:h-40 w-full h-52 object-cover rounded-lg"
          />
          <h1 className="mb-2 text-lg font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white">
          {getText(post.title)}
          </h1>
          <span className="border-t border-slate-400 flex justify-center">Read More</span>
        </div>
        </Link>
       
      ))}
    </div>
  );
};

export default Sidebar;
