import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";

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
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-24 h-20"
        src="https://assets.nflxext.com/en_us/layout/ecweb/netflix-app-icon_152.jpg"
        alt="Logo"
      />
      {user && (
        <div className="flex px-10 py-2 items-center gap-4 ">
          <img className="w-22 h-22 " alt="usericon" src={user.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white">
            (sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
