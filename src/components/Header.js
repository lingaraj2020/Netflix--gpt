import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispath=useDispatch();
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

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispath(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
        navigate("/browse");
      } else {
        dispath(removeUser());
        navigate("/");
      }
    });

    //unsubscribe will call when component unmounts
    return ()=>unsubscribe();
  }, []);


  return (
    <div>
      <div className="absolute w-screen px-16 py-2 bg-gradient-to-b from-black z-10  flex flex-col md:flex-row justify-between">
        <img
          className="w-36 h-auto"
          src={NETFLIX_LOGO}
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
            <img className="w-12 h-12 rounded-sm" src={user.photoURL} alt="user-logo" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
