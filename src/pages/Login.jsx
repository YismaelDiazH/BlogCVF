import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.png";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/authContext.js";

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handledChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src={Logo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
         Connexion
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form>
      <div className="grid gap-6 mb-6 md:grid-cols-2 ">
      

      </div>
      <div className="mb-6">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nom d'utilisateur
        </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handledChange}
          className=" bg-white  border-b-2 border-gray-300 text-gray-900 text-sm focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-0"
          placeholder="Nom: tester MotPasse: tester123 ou Créez votre compte"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Mot de passe
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handledChange}
          className=" bg-white  border-b-2 border-gray-300 text-gray-900 text-sm focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-0"
          placeholder="•••••••••"
          required
        />
      </div>
    
      <div className="flex items-start mb-6">
     
        <label
          htmlFor="remember"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Vous n'avez pas de {" "}
          <Link
            to="/register"
            className="text-orange-500 hover:underline dark:text-orange-500"
          >
            compte?
          </Link>
          .
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}  
      >
Envoyer      </button>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
    </form>
      </div>
  
  </div>
  );
};

export default Login;
