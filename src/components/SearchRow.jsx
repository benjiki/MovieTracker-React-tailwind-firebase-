import React, { useEffect, useState } from "react";
import Axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const SearchRow = ({ title, options, searchvalue, rowId }) => {
  // Destructuring props
  const [movies, setMovies] = useState([]);
  let fetchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchvalue}&include_adult=false&language=en-US&page=1`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await Axios.get(fetchUrl, options); // Making request with options
        setMovies(response.data.results); // Assuming response.data contains results array
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [fetchUrl, options]); // Added fetchUrl and options to dependency array

  const slidLeft = (e) => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slidRight = (e) => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slidLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden  group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap  scrollbar-hide relative"
        >
          {movies.map((movie, index) => (
            <Movie movie={movie} index={index} />
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

export default SearchRow;
