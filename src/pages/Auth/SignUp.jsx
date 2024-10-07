import React, { useState, useEffect } from "react";
import cow from "../../assets/cowcover3.png";
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Button from "../../component/Button";

export default function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.Auth);

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!data.name || !data.email || !data.password) {
      toast.error("All fields are required.");
      return;
    }
    if (!validateEmail(data.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/auth/register", data);
      if (res.data && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && user.user && (user.user._id || user.user.id)) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4 bg-light relative"
      style={{
        backgroundImage: `url(${cow})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-light opacity-80"></div>

      {/* Form container */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-200 rounded-lg shadow-lg h-auto mt-20 mb-10 relative z-10">
        <div
          className="w-full md:w-1/2 min-h-[250px] md:h-auto bg-cover bg-center rounded-ts-lg md:rounded-l-lg"
          style={{
            backgroundImage: `url(${cow})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full space-y-8">
            <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900">
              Create Account
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold tracking-wider text-black">
                  Enter your name
                </label>
                <input
                  id="name"
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={data.name}
                  onChange={handleOnChange}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold tracking-wider text-black">
                  Enter your email
                </label>
                <input
                  id="email"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={handleOnChange}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label htmlFor="password" className="font-semibold tracking-wider text-black">
                  Enter your password
                </label>
                <input
                  id="password"
                  placeholder="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={data.password}
                  onChange={handleOnChange}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer absolute right-3 bottom-[0.6rem] z-50"
                >
                  {showPassword ? "hide" : "show"}
                </span>
              </div>

              <Button btnText={loading ? "Signing Up..." : "Sign Up"} disabled={loading} />

              <div className="flex justify-center mt-4">
                <Link to="/login" className="text-sm text-primary hover:underline">
                  Already have an account? Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
