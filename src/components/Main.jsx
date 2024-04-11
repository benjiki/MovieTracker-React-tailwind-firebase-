import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { requests, options } from '../Requests'; // Importing requests and options from the file

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [randomMovie, setRandomMovie] = useState(null); // State to store random movie

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await Axios.get(requests.requestPopular, options); // Making request with options
                setMovies(response.data.results); // Assuming response.data contains results array
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
           
        fetchMovies();
    }, []);

    useEffect(() => {
        if (movies.length > 0) {
            const randomIndex = Math.floor(Math.random() * movies.length);
            setRandomMovie(movies[randomIndex]);
        }
    }, [movies]);

    const truncateString= (str, numWords) => {
        if(str?.length>numWords){
        return str.slice(0,numWords)+'...';
        }else{
        return str;
        }
    }
    return (
        <div className=' w-full h-550px text-white overflow-hidden'>
            <div className="w-full h-full">
            <div className="absolute  w-full h-[492px] bg-gradient-to-r from-black"></div>
            {randomMovie && (
                   <img className='w-full h-[492px] object-cover' src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`} alt={randomMovie?.title}  />  
                   )}    
            <div className='absolute top-[20%] p-4 w-full md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{randomMovie?.title}</h1>
                <div className='my-4'>
                    <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>play</button>
                    <button className='border  text-white ml-4 border-gray-300 py-2 px-5'>watch later</button>
                </div>
                <p className='text-gray-400 text-sm'>Released:{randomMovie?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
{truncateString(randomMovie?.overview,150)}
                </p>
            </div>

            </div>
        </div>
    );
};

export default Main;
