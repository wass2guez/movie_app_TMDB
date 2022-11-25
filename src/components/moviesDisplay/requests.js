const API_KEY = 'e5fe08aef5df87b1908d4b27c4e8b7fb'

const requests = {
    fetchNowPlaying : `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
}
export default requests