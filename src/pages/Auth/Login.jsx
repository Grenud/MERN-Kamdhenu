import React, { useState, useEffect } from "react";
import cow from "../../assets/cowcover3.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { SetUser } from "../../redux/AuthSlice";
import GoogleLogin from "./GoogleLogin";
import Button from "../../component/Button";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [show, setShow] = useState("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.Auth);

  const handleLoginSubmit = async (e) => {
    console.log('hello')
    e.preventDefault();
    const { data } = await axios.post("/api/auth/login", {
      email: userData.email,
      password: userData.password
    });
    if (data.success) {
      toast.success(data.message);
      dispatch(SetUser({
        user: data.user
      }));
      navigate("/");
    } else {
      toast.error(data.message);
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (user && user._id) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div
      className="relative flex min-h-screen items-center justify-center p-4"
    >
      {/* Background image with reduced opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${cow})`,
          opacity:0.1, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1
        }}
      ></div>

      {/* Main content */}
      <div className="relative flex min-h-screen items-center justify-center ">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-200 rounded-lg shadow-lg h-auto mt-20 mb-10 relative z-10">
        {/* Image Container */}
        <div className="w-full md:w-1/2 min-h-[200px] flex items-center justify-center">
          <img
            src={cow}
            alt="Cow"
            className="w-full h-full object-cover" 
            style={{
              opacity: 1, 
            }}
          />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full space-y-8">
            <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900">
              Login
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleLoginSubmit}>
              <div className="flex flex-col gap-2">
                <label className="font-semibold tracking-wider text-black">
                  Enter your email
                </label>
                <input
                  value={userData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  name="email"
                  type="email"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="font-semibold tracking-wider text-black">
                  Enter your password
                </label>
                <input
                  value={userData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  name="password"
                  type={show}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                />
                <span
                  onClick={() => setShow(show === "text" ? "password" : "text")}
                  className="cursor-pointer absolute right-3 bottom-[0.6rem] z-50"
                >
                  {show === "text" ? "hide" : "show"}
                </span>
              </div>

              <Button btnText={"Login"} />

              <div className="flex justify-between items-center mt-4">
                <Link className="text-sm text-primary hover:underline" to="/signup">
                  Create Account
                </Link>
                <Link className="text-sm text-primary hover:underline" to="/forgot-password">
                  Forgot Password?
                </Link>
              </div>
            </form>

            <div className="mt-6">
              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;