import React, { useState, useEffect } from "react";
import ayurveda from "../../assets/cowcover3.png";
import bgx from '../../assets/bgx.jpg'
import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Button from "../../component/Button"; // Assuming Button is the same as in the Register component

export default function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [show, setShow] = useState('password')
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.Auth);

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/auth/register', {
      name: data.name,
      email: data.email,
      password: data.password
    });
    if (res.data && res.data.success) {
      toast.success(res.data.message);
      navigate('/login');
    } else {
      toast.error(res.data.message);
    }
  };

  useEffect(() => {
    if (user && user.user && (user.user._id || user.user.id)) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-light"
      style={{
        backgroundImage: `url(${bgx})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="flex flex-col md:flex-row w-full max-w-4xl  rounded-lg shadow-lg h-auto mt-20 mb-10 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <div
          className="w-full md:w-1/2 min-h-[250px] md:h-auto bg-cover bg-center rounded-ts-lg md:rounded-l-lg"
          style={{
            backgroundImage: `url(${ayurveda})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full space-y-8">
            <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900">
              Create Account
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="font-semibold tracking-wider text-black">
                  Enter your name
                </label>
                <input
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={data.name}
                  onChange={handleOnChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold tracking-wider text-black">
                  Enter your email
                </label>
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                />

              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="font-semibold tracking-wider text-black">
                  Enter your password
                </label>
                <input
                  placeholder="Password"
                  name="password"
                  type={show}
                  value={data.password}
                  onChange={handleOnChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                />
                <span onClick={() => setShow(show == 'text' ? 'password' : 'text')} className="cursor-pointer absolute right-3 bottom-[0.6rem] z-50">{show == 'text' ? 'hide' : 'show'}</span>
              </div>

              <Button btnText={"Sign Up"} />

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
