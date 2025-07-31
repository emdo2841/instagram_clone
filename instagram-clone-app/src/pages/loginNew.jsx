import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import LoginFooter from "../components/loginFooter";
import { useState } from "react";
const LoginNew = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const isFormValid = username.trim() !== "" && password.trim() !== "";
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
          <form
            action=""
            className="flex flex-col items-center w-full max-w-xs mx-auto"
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-10 text-sm font-semibold rounded-lg mt-4 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 text-sm font-semibold rounded-lg mt-4 p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex w-full mt-4">
              <button className="ml-auto text-blue-500 px-4 py-2 rounded">
                Forgot password?
              </button>
            </div>
            <button
                disabled={!isFormValid}
                onClick={() => navigate('/insta-main')}
              className={` w-full h-10 text-white text-sm font-semibold rounded-lg mt-4 hover:bg-[#2a7bb8] transition-colors duration-300 ${
                isFormValid
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-[#3797EF] cursor-not-allowed"
                            }`}
                        
                    >
            
              Log in
            </button>
          </form>

          {/* Switch Account Button */}
          <button
            className="w-full max-w-xs h-10 text-[#3797EF] text-sm font-semibold rounded-lg mt-4 hover:text-[#2a7bb8] hover:underline transition-colors duration-300"
            onClick={() => navigate("/login-new")}
          >
            Login with facebook
          </button>
          <LoginFooter text="Instagram on facebook"  />
        </main>
      </>
    );
};

export default LoginNew;