import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const [progress, setProgress] = useState(0);
  const { state: postToEdit } = useLocation();
  const isEditing = postToEdit !== undefined;
  const [title, setTitle] = useState(postToEdit?.title || ""); // Asignación correcta para el título
  const [value, setValue] = useState(postToEdit?.desc || "");
  const [cat, setCat] = useState(postToEdit?.cat || "");
  const [imgUrl, setImgUrl] = useState(postToEdit?.img || "");


  const navigate = useNavigate();

  const upload = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      // No hay nueva imagen seleccionada; no hacer nada
      return;
    }

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'images_blog');
  
    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dd7wavooi/image/upload', formData, {
        onUploadProgress: progressEvent => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
        }
      });
      setImgUrl(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  const handleClick = async () => {
    const postDetails = {
      title,
      desc: value,
      cat,
      img: imgUrl, // Asegúrate de que imgUrl contiene la URL correcta
      date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    };
  
    try {
      if (isEditing && postToEdit && postToEdit.id) { // Verifica si está editando y postToEdit tiene un id
        // Actualizar el post existente
        await axios.put(`/posts/${postToEdit.id}`, postDetails);
      } else {
        // Crear un nuevo post
        await axios.post("/posts", postDetails);
      }
      navigate("/");
    } catch (error) {
      console.error("Error at submitting post:", error);
    }
  };
  
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto md:py-8">
      <div className="mx-10 p-4 flex  md:flex-row flex-col ">
        <div className=" basis-2/3 flex flex-col">
          <input
            type="text"
            placeholder="Title"
            value={getText(title)}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full p-2 mb-3 text-gray-900 border border-orange-300 rounded-lg bg-orange-50 text-base focus:ring-orange-600 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:orange-blue-500"
          />
          <div>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
          </div>
        </div>
        
        <div className="basis-1/3 md:px-12">
          <div>
            <p className="text-lg font-bold text-gray-900 md:text-xl lg:text-2xl leading-none tracking-tight dark:text-white mb-2">
              Publication
            </p>

            <div className="bg-stone-200 rounded-lg p-2 mb-4">
              <div>
                <div className="inline-flex rounded-md shadow-sm">
                  <button
                  disabled
                    className="px-4 py-2 text-sm font-medium text-orange-400 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-orange-700 focus:text-orange-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-orange-500 dark:focus:text-white"
                  >
                    Enregister brouillon
                  </button>

                  <button
                    onClick={handleClick}
                    className="px-4 py-2 text-sm font-medium text-orange-400 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-orange-700 focus:text-orange-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-orange-500 dark:focus:text-white"
                  >
                    Publier
                  </button>
                  {progress > 0 && progress < 100 && (
    <div style={{ width: '100%' }}>
      <div style={{ width: `${progress}%`, backgroundColor: "#fb923c", color: 'white', textAlign: 'center' }}>
        Cargando: {progress}%
      </div>
    </div>
  )}
                </div>

                <p>
                  <strong>Status:</strong> brouillon
                </p>
              </div>
              <div>
                <p>
                  <strong>Visibilité:</strong> public
                </p>
              </div>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={upload} 
                  />
                </label>
              </div>
              {/* //opciones de publicacion */}
              <p className="mt-2 font-bold text-gray-900 dark:text-white><strong ">
                Identification
              </p>
              <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="ux-radio-id"
                      type="radio"
                      checked={cat === "ux_ui"}
                      onChange={(e) => setCat(e.target.value)}
                      value="ux_ui"
                      name="list-radio"
                      className="-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="ux-radio-id"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      UX-UI
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="backend-radio-id"
                      type="radio"
                      checked={cat === "backend"}
                      value="backend"
                      onChange={(e) => setCat(e.target.value)}
                      name="list-radio"
                      className="-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="backend-radio-id"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Back-end
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="frontend-radio-id"
                      type="radio"
                      checked={cat === "frontend"}
                      value="frontend"
                      onChange={(e) => setCat(e.target.value)}
                      name="list-radio"
                      className="-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="frontend-radio-id"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Front-end
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Write;
