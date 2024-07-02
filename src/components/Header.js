import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANG } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispath(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispath(removeUser());
        navigate("/");
      }
    });

    //unsubscribe will call when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptsearch = () => {
    //Toggle when click on gpt button
    dispath(toggleGptSearchView());
  };

  const handleLanguage = (e) => {
    dispath(changeLanguage(e.target.value));
  };

  return (
    <div>
      <div className="absolute w-screen pl-16 py-2 bg-gradient-to-b from-black z-10  flex flex-col md:flex-row justify-between">
        <img className="w-36 h-16 mx-auto md:mx-0" src={NETFLIX_LOGO} alt="logo" />
        {user && (
          <div className="flex justify-between p-2 items-center">
            {showGptSearch && (
              <select onChange={handleLanguage}>
                {SUPPORTED_LANG.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="py-0 md:py-2 px-4 m-1 md:m-4 text-white bg-black hover:opacity-60 border border-white rounded-lg"
              onClick={handleGptsearch}
            >
              {showGptSearch?"Home":"Movie Search"}
            </button>
            <img
              className="hidden md:inline-block w-12 h-12 rounded-sm"
              src={user.photoURL}
              alt="user-logo"
            />
            <button
              className="text-black bg-white font-bold rounded-lg p-1 m-1"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
