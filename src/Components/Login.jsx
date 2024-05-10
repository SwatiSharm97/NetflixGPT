import { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { Validation } from "../utilis/Validation";
import { auth } from "../utilis/firebase";
import { BG_IMG_URL } from "../utilis/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [message, setMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const HandleValidation = () => {
    const validateMessage = Validation(
      email.current.value,
      password.current.value
    );
    setMessage(validateMessage);
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up

          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmcNFqBjePvTsHQcQFD5eFYydbCxwaaCslTWbK9_bT27wNZR1PsxdY5ceiAA&s",
          })
            .then(() => {})
            .catch((error) => {
              // An error occurred
              // ...
              const errorCode = error.code;
              const errorMessage = error.message;
              setMessage("went wrong");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + -+errorMessage);

          // ..
        });
    }
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + -+errorMessage);
        });
    }
  };
  const HandleSignInUser = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className=" flex flex-col w-full h-full ">
      <Header />
      <div className="">
        <img src={BG_IMG_URL} alt="logo" className="" />
      </div>
      {/* onSubmit={(e)=> e.preventDefault()} is stop the form to submit because wthout it ,it re render form or submit */}
      <div className=" w-full h-full flex justify-center absolute mt-24">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-1/4 h-4/5 border border-black bg-black bg-opacity-75 rounded-xl p-10 flex justify-center  "
        >
          <div className="flex flex-col gap-4 w-4/5 justify-center">
            <span className="text-3xl font-extrabold text-white">
              {isSignIn ? "Sign In" : "Sign Up"}
            </span>
            <span>
              <input
                ref={email}
                type="text"
                placeholder="Email or phone Number"
                className="bg-black bg-opacity-75 p-4  rounded-sm text-white w-full"
              ></input>
            </span>
            {!isSignIn && (
              <span>
                <input
                  type="text"
                  ref={name}
                  placeholder="Full Name"
                  className="bg-black bg-opacity-75 p-4 rounded-sm text-white w-full"
                ></input>
              </span>
            )}
            <span>
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="bg-black bg-opacity-75 p-4 rounded-sm text-white w-full"
              ></input>
            </span>
            <p className="text-red-600 font-bold text-xl">{message}</p>
            <div className="flex flex-col gap-4 items-center">
              <button
                className="w-full p-2  border border-red-600 rounded bg-red-600 font-bold text-white"
                onClick={HandleValidation}
              >
                {isSignIn ? "sign in" : "sign up"}
              </button>
              <span className="text-white font-bold">OR</span>
              <button className="w-full p-2  border border-gray-700  bg-opacity-75 rounded bg-gray-700 font-bold text-white">
                Use a Sign-In Code
              </button>
              <span className="text-white font-bold">Forgot Password?</span>
            </div>
            <div className=" flex flex-col gap-4">
              <span>
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className=" text-white">Remember Me</span>
              </span>
              <span
                className="text-white cursor-pointer"
                onClick={HandleSignInUser}
              >
                {isSignIn ? (
                  <span>New to Netflix ? Sign up now</span>
                ) : (
                  <span>Already Registered ? Sign In now</span>
                )}
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
