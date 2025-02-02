import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const { user, signUp } = UserAuth(); // Extracting signUp function from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password); // Using the signUp function from context
      console.log("Signed up");
      navigate("/");
    } catch (error) {
      alert(error.message); // Displaying error message if sign up fails
    }
  };
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute  w-full h-full object-cover"
        src="https://mebincdn.themebin.com/1664271579476.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <div className="text-3xl font-bold">Sign up</div>
            <form className="w-full flex flex-col py-4" onSubmit={handleSubmit}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="password"
                autoComplete="current-password"
              />
              <button
                type="submit"
                className="bg-red-600 py-3 my-6 rounded font-bold"
              >
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-10">
                <span className="text-gray-600">
                  Already subscribed to Dagi Movies?
                </span>
                {""}
                <Link to="/login">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
