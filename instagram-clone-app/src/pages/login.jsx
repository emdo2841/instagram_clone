
import "../styles/login.css";
import LoginFooter from "../components/loginFooter";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    return (
      <>
    <main className="flex flex-col items-center justify-center w-full h-screen bg-gray-100 p-4">
      {/* Logo */}
      <div className="flex items-center justify-center w-full h-20">
        <div
          id="insta-logo"
          className="w-32 h-16 md:w-48 md:h-24 bg-no-repeat bg-center bg-cover"
        ></div>
      </div>

      {/* User Image */}
      <div
        id="user"
        className="bg-[url(/user.png)] bg-center bg-cover rounded-full h-20 w-20 mt-10"
      ></div>

      {/* Login Button */}
        <button
            onClick={() => navigate('/insta-main')}
            className="bg-[#3797EF] w-full max-w-xs h-10 text-white text-sm font-semibold rounded-lg mt-4 hover:bg-[#2a7bb8] transition-colors duration-300">
        Log in
      </button>

      {/* Switch Account Button */}
      <button className="w-full max-w-xs h-10 text-[#3797EF] text-sm font-semibold rounded-lg mt-4 hover:text-[#2a7bb8] hover:underline transition-colors duration-300 cursor-pointer" onClick={() => navigate("/login-new")}>
        Switch accounts
      </button>
      <LoginFooter text="Don't have an Account?" button="Sign up"/>
      </main>

      </>
  );
};

export default Login;
