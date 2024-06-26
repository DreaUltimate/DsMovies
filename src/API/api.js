import axios from 'axios';

const key = '81cea525';

// Get movies by search
const fetchMovies = async (query, signal) => {
    try {
        const response = await axios.get(
            `https://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal }
        );
        return response.data.Search;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

// Get movies by id
const fetchMovie = async (id) => {
    try {
        const response = await axios.get(
            `https://www.omdbapi.com/?apikey=${key}&i=${id}`
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

export { fetchMovies, fetchMovie };
