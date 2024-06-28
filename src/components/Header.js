import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div>
      <div className="absolute w-screen px-24 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-44 h-20"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        {user && (
          <div className="flex items-center">
            <button
              className="text-black bg-white font-bold rounded-lg p-1 m-1"
              onClick={handleSignOut}
            >
              Sign out
            </button>
            <img className="w-12 h-12 rounded-sm" src={user?.photoURL} alt="user-logo" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
