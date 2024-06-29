import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {
  NETFLIX_BACKGROUND,
  NETFLIX_LOGO,
  USER_LOGO,
} from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMesasage, setErrorMessage] = useState(null);

  const dispath = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_LOGO,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispath(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handlesigninform = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="bg-gradient-to-b from-black"
          src={NETFLIX_BACKGROUND}
          alt="bg-photo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md"
      >
        <div>
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
        </div>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-4 my-2 w-full rounded-sm bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-2 w-full rounded-sm bg-gray-700"
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="p-4 my-2 w-full rounded-sm bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <p className="text-base p-2 ">{errorMesasage}</p>
        <button
          className="p-4 my-6 rounded-md bg-red-700 font-semibold w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex p-2">
          <p className="px-1">
            {isSignInForm ? "New to Netflix? " : "Aready Registered? "}
          </p>
          <span
            className="cursor-pointer px-1 font-semibold"
            onClick={handlesigninform}
          >
            {isSignInForm ? " Sign up now." : " Sign In."}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
