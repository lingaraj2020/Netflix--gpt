import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninform, setIssigninform] = useState(true);

  const hadnlesigninform = () => {
    setIssigninform(!isSigninform);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="bg-gradient-to-b from-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-photo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md">
        <div>
          <h1 className="font-bold text-3xl py-4">
            {isSigninform ? "Sign In" : "Sign Up"}
          </h1>
        </div>
        {!isSigninform && <input
          className="p-4 my-2 w-full rounded-sm bg-gray-700"
          type="text"
          placeholder="Full Name"
        />}
        <input
          className="p-4 my-2 w-full rounded-sm bg-gray-700"
          type="text"
          placeholder="Email or Mobilr number"
        />
        <input
          className="p-4 my-2 w-full rounded-sm bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-6 rounded-md bg-red-700 font-semibold w-full">
          {isSigninform ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex p-2">
          <p className="px-1">
            {isSigninform ? "New to Netflix? " : "Aready Registered? "}
          </p>
          <span className="cursor-pointer px-1" onClick={hadnlesigninform}>
            {isSigninform ? " Sign up now." : " Sign In."}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
