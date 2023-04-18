import axios from 'axios';
import API_KEY from "../env.development.local.js";

const API_URL = "https://api.themoviedb.org/3/";
const language = "&language=es-ES";

const getRecentMovies = async () => {
    try {
        return await axios.get(`${API_URL}movie/now_playing?${API_KEY}${language}`).then((res) => {
            return res.data.results;
        });
    } catch(error) {
        console.log(error);
        throw new Error(error.message);
    }
}

export {getRecentMovies};