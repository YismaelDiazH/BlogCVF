import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import moment from "moment";
import { AuthContext } from "../context/authContext.js";
import axios from "axios";
import DOMPurify from "dompurify";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();

  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  const isUserPostOwner = currentUser && post.user_id === currentUser.id;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api-blogcv.onrender.com/api/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto md:py-8">
      <div className="mx-10 p-4 flex  md:flex-row flex-col ">
        <div className=" basis-2/3 bg-stone-50 p-2 rounded-lg">
          <img
            className="md:h-72 w-full h-52 object-cover rounded-lg"
            src={post?.postImg}
            alt={`${post.title}`}
          />
          <div className="flex flex-row items-center mt-2 mb-10">
            {post.userImg && (
              <img
                className=" w-14 h-14 rounded-full border"
                src="https://picsum.photos/200/200" //imagen del usuario que hizo el post
                alt=""
              />
            )}
            <div className=" flex flex-col justify-center">
              <span className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {post.username} {/* //nombre del usuario que hizo el post */}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Posted {moment(post.date).fromNow()}
              </span>
            </div>
          
            {isUserPostOwner && (
              <div className="flex
              flex-column">
                <Link to={`/write?edit=2`} state={post}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-6 ml-6"
                  >
                    {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                    <path
                      fill="#ff8f33"
                      d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                    />
                  </svg>
                </Link>
                
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-6 ml-6"
                    onClick={handleDelete}
                  >
                    {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                    <path
                      fill="#ff8f33"
                      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                    />
                  </svg>
               
              </div>
            )}
          </div>
          <section>
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
              {getText(post.title)}
            </h1>
            {/* <p className="mb-4 text-lg font-normal text-justify text-gray-500 dark:text-gray-400"> */}
            <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p> 
          </section>
        </div>
        <div className="basis-1/3 md:px-12">
          <Sidebar cat={post.cat} />
        </div>
      </div>
    </div>
  );
};

export default Single;
