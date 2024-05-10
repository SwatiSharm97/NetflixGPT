import { auth } from "../utilis/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utilis/store/userSlice";
import { ShowGptPage } from "../utilis/store/gptSearchSlice";
import { onAuthStateChanged } from "firebase/auth";
import { ChangeLang } from "../utilis/store/gptSearchSlice";

const Header = () => {
  const signInUser = useSelector((store) => store.user);
  const IsshowPage = useSelector((store) => store.gptSearch.showPage);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const HandleGptSearchShow = () => {
    dispatch(ShowGptPage());
  };

  const HandleChangeLang = (e) => {
    dispatch(ChangeLang(e.target.value));
  };
  return (
    <div className=" absolute px-8 py-1 bg-gradient-to-b from-black  w-full flex flex-row justify-between">
      <div>
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-44 h-30"
        />
      </div>
      <div className="flex items-center space-x-2">
        {signInUser && (
          <>
            <select className="p-2 rounded-lg" onClick={HandleChangeLang}>
              <option value="english">english</option>
              <option value="hindi">hindi</option>
              <option value="spanish">spanish</option>
            </select>
            <button
              className="bg-purple-600 text-white p-2 rounded-lg font-bold"
              onClick={HandleGptSearchShow}
            >
              {IsshowPage ? "Home" : " Search GPT"}
            </button>
          </>
        )}

        <button className="font-bold text-red-600" onClick={HandleSignOut}>
          Sign out
        </button>
      </div>
    </div>
  );
};
export default Header;
