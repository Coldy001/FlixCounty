export const API_KEY = "2220552ecd072a98b6e1e2a569d5a626";

export const query_string = `&api_key=${API_KEY}&language=en-US`;

export const url = "https://api.themoviedb.org/3";

export const MOVIE = {
    NOWPLAYING: `${url}/movie/now_playing?${query_string}`,
    POPULAR: `${url}/movie/popular?${query_string}`,
    TOPRATED: `${url}/movie/top_rated?${query_string}`,
    UPCOMING: `${url}/movie/upcoming?${query_string}`,
};

export const TV = {
    AIRINGTODAY: `${url}/tv/airing_today?${query_string}`,
    ONTHEAIR: `${url}/tv/on_the_air?${query_string}`,
    TOPRATED: `${url}/tv/top_rated?${query_string}`,
    POPULAR: `${url}/tv/popular?${query_string}`,
};

export const movieDiscover = {
    Action: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=28`,
    Adventure: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=12`,
    Animation: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=16`,
    Comedy: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=35`,
    Crime: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=80`,
    Documentary: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=99`,
    Drama: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=18`,
    Family: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=10751`,
    Fantasy: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=14`,
    History: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=36`,
    Horror: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=27`,
    Music: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=10402`,
    Mystery: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=9648`,
    Romance: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=10749`,
    ScienceFiction: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=878`,
    TVMovie: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=10770`,
    Thriller: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=53`,
    War: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=10752`,
    Western: `${url}/discover/movie?${query_string}&include_adult=false&with_genres=37`,
};

export const tvDiscover = {
    ActionAdventure: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=10759`,
    Animation: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=16`,
    Comedy: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=35`,
    Crime: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=80`,
    Documentary: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=99`,
    Drama: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=18`,
    Family: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=10751`,
    Kids: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=10762`,
    Mystery: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=9648`,
    News: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=10763`,
    Reality: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=10764`,
    SciFiFantasy: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=10765`,
    Soap: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=10766`,
    Talk: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=10767`,
    WarPolitics: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=10768`,
    Western: `${url}/discover/tv?${query_string}&include_adult=false&with_genres=37`,
};

export const genres = [
    {
        id: 28,
        name: "Action",
    },
    {
        id: 12,
        name: "Adventure",
    },
    {
        id: 16,
        name: "Animation",
    },
    {
        id: 35,
        name: "Comedy",
    },
    {
        id: 80,
        name: "Crime",
    },
    {
        id: 99,
        name: "Documentary",
    },
    {
        id: 18,
        name: "Drama",
    },
    {
        id: 10751,
        name: "Family",
    },
    {
        id: 14,
        name: "Fantasy",
    },
    {
        id: 36,
        name: "History",
    },
    {
        id: 27,
        name: "Horror",
    },
    {
        id: 10402,
        name: "Music",
    },
    {
        id: 9648,
        name: "Mystery",
    },
    {
        id: 10749,
        name: "Romance",
    },
    {
        id: 878,
        name: "Science Fiction",
    },
    {
        id: 10770,
        name: "TV Movie",
    },
    {
        id: 53,
        name: "Thriller",
    },
    {
        id: 10752,
        name: "War",
    },
    {
        id: 37,
        name: "Western",
    },
    {
        id: 10759,
        name: "Action & Adventure",
    },
    {
        id: 10762,
        name: "Kids",
    },
    {
        id: 10763,
        name: "News",
    },
    {
        id: 10764,
        name: "Reality",
    },
    {
        id: 10765,
        name: "Sci-Fi & Fantasy",
    },
    {
        id: 10766,
        name: "Soap",
    },
    {
        id: 10767,
        name: "Talk",
    },
    {
        id: 10768,
        name: "War & Politics",
    },
];
