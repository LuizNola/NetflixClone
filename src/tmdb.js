const apiKey = "language=pt-BR&api_key=d02b1edc4907744f2820bf964a661c43"
const apiBase = "https://api.themoviedb.org/3"
/**
 * Originais netflix
 * em alta
 * recomendados para voce
 * generos
*/

const fetchFunc =  async (endpoint) => {
    const req = await fetch(`${apiBase}${endpoint}`);
    const json = await req.json();
    return json;
}
export default {
    getHomeList: async () => {
        return [
            {
                slug: "origin",
                title: "Originais Netflix",
                items: await fetchFunc(`/discover/tv?with_network=213&${apiKey}`)
            },

            {
                slug: "recomend",
                title: "Recomendado para você",
                items:  await fetchFunc(`/trending/all/week?${apiKey}`)
            },
            {
                slug: "gender-comedy",
                title: "Comedia",
                items: await fetchFunc(`/discover/movie?with_genres=35&${apiKey}`)
            },
            {
                slug: "gender-action",
                title: "Ação",
                items: await fetchFunc(`/discover/movie?with_genres=28&${apiKey}`)
            }
        ]
    },
    getMovieInfo: async (movieID,type) =>{
        let info = {};
        if(movieID){
            switch(type){
                case 'movie':
                    info = await fetchFunc(`/movie/${movieID}?${apiKey}`)
                break;
                case 'tv':
                    info = await fetchFunc(`/tv/${movieID}?${apiKey}`)
                break;
            }
        }
        return info
    }
}