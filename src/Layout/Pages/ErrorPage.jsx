import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError;
  console.log(error);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Oops! Something went wrong 😢
        </h1>

        {error && <p className="text-gray-600 mb-6">{error.data}</p>}
        <NavLink to={"/"}>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300">
            Go Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};
