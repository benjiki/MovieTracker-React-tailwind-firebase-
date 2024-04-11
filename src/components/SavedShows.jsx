import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../Firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const { user } = UserAuth(); // Extracting signUp function from context
  const [movies, setMovies] = useState([]);
  const slidLeft = (e) => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slidRight = (e) => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    if (user?.email) {
      const docRef = doc(db, "users", user.email);

      const unsubscribe = onSnapshot(docRef, (doc) => {
        if (doc.exists()) {
          setMovies(doc.data()?.savedShows);
        } else {
          console.log("No such document!");
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user?.email]);
  //  const movieRef = doc(db, "users", `$(user?.email)`);
  const movieRef = doc(db, "users", user?.email); // Fix the string interpolation

  const deleteShow = async (passedID) => {
    try {
      if (user?.email) {
        const movieRef = doc(db, "users", user.email);
        const result = movies.filter((item) => item.id !== passedID);
        await updateDoc(movieRef, { savedShows: result });
      } else {
        console.error("User email is undefined");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">
        DOwnLoad Benjamin !!
      </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slidLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden  group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap  scrollbar-hide relative"
        >
          {movies.map((movie, id) => (
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative pl-6">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                key={id}
                alt={movie.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {movie?.title}
                </p>
                <p
                  onClick={() => deleteShow(movie.id)}
                  className="absolute text-gray-300 top-4 right-4"
                >
                  <AiOutlineClose></AiOutlineClose>
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slidRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShows;
