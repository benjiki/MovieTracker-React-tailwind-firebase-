import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className=" w-full h-[400px] md:h-[450px] lg:h-[500px] object-cover"
          src="https://mebincdn.themebin.com/1664271579476.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px] md:h-[600px] lg:h-[750px]"></div>
        <div className="absolute top-[10%] p-4">
          <h1 className="text-3xl  font-bold">DownLoad movies</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
