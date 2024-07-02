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
        <img className="w-36 h-auto" src={NETFLIX_LOGO} alt="logo" />
        {user && (
          <div className="flex p-2 items-center">
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
              className="py-2 px-4 m-4 w-auto text-white bg-black hover:opacity-60 border border-white rounded-lg"
              onClick={handleGptsearch}
            >
              {showGptSearch?"Home":"Movie Search"}
            </button>
            <img
              className="w-12 h-12 rounded-sm"
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
