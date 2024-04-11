import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = ({ setSearchQuery }) => {
  const { user, logOut } = UserAuth();
  const [query, setQuery] = useState("");
  const navigation = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigation("/");
    } catch (error) {
      alert(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
    setQuery("");
    navigation("/");
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 font-bold text-4xl">Dagi Movies</h1>
      </Link>
      <div className="absolute top-[100%] right-end  h-[20px] w-full">
        <form
          onSubmit={handleSearch}
          className="flex flex-row justify-end pr-8"
        >
          <input
            className="bg-transparent block text-white border-b-2 border-gray-300 focus:outline-none cursor-pointer "
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="bg-red-600 text-white p-2 rounded-full">
            Search
          </button>
        </form>
      </div>

      {user?.email ? (
        <div className="">
          <Link to="/account">
            <button className="  text-white hover:text-red-300">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 ml-3 px-6 py-2 rounded cursor-pointer text-white hover:bg-red-800"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="">
          <Link to="/login">
            <button className="  text-white hover:text-red-300">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 ml-3 px-6 py-2 rounded cursor-pointer text-white hover:bg-red-800">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
