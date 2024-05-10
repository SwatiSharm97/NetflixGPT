import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../store/movieSlice";
const UpcomingMovies = () => {
    const dispatch = useDispatch()

    const fetchUpcomingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS) 
        const movies = await data.json()
        dispatch(addUpcomingMovie(movies))
    }
    useEffect(()=>{
        fetchUpcomingMovies()
    },[])
};
export default UpcomingMovies;
