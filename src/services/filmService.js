import api from '@config/api';
import Config from 'react-native-config';

export const getDiscoverFilm = async () => {
    /*
    The reson of this extention is because that the API endpoint /movie/id has more information available than the default recommendation film list.
    That's why I only take the recommened film's I and then search for each one to retrieve its info.
    */
    const getFilmIDs = await (async () => {
        const recommendedFilmsId = [];
        const response = await api.get(`/discover/movie?api_key=${Config.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);

        if (!response.ok) return;

        response.data.results.forEach(film => recommendedFilmsId.push(film.id));
        return recommendedFilmsId;
    })();

    const getFilmsInfo = await (async (idArray) => {
        const filmsInfo = [];
        for (let i = 0; i < idArray.length; i++) {
            const filmId = idArray[i];
            const response = await api.get(`/movie/${filmId}?api_key=${Config.API_KEY}`);

            if (!response.ok) continue;
            
            const filmInfo = response.data;
            for (let k in filmInfo) {
                if (k.endsWith('_path') && filmInfo[k]) filmInfo[k] = `https://image.tmdb.org/t/p/original${filmInfo[k]}`;
            }
            filmsInfo.push(filmInfo);
        }
        return filmsInfo
    })(getFilmIDs);

    return getFilmsInfo;
};