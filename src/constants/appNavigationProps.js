// Colors
import {
    PrimaryLight,
    PrimaryVariantLight,
    BackgroundLight,
    PrimaryDark,
    PrimaryVariantDark,
} from '@constants/colors';

export const homeScreen = {
    options: { title: 'Welcome!' },
};

export const homeListScreen = {
    options: { title: 'Discover Films' },
};

export const defaultNavOptions = (isLightTheme) => ({
    headerStyle: { backgroundColor: isLightTheme ? PrimaryLight : PrimaryDark },
    headerTintColor: BackgroundLight,
    headerTitleAlign: "center",
});

export const statusBarOptions = {
    barStyle: 'light-content',
    backgroundColor: (isLightTheme) => isLightTheme ? PrimaryVariantLight : PrimaryVariantDark,
};

export const filmDetailScreen = {
    options: { title: 'Film Detail' },
    initialParams: {
        "adult": false,
        "backdrop_path": "https://image.tmdb.org/t/p/original/avedvodAZUcwqevBfm8p4G2NziQ.jpg",
        "belongs_to_collection": null,
        "budget": 25000000,
        "genres": [
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 80,
                "name": "Crimen"
            }
        ],
        "homepage": "",
        "id": 278,
        "imdb_id": "tt0111161",
        "original_language": "en",
        "original_title": "The Shawshank Redemption",
        "overview": "Acusado del asesinato de su mujer, Andrew Dufresne, tras ser condenado a cadena perpetua, es enviado a la prisión de Shawshank. Con el paso de los años conseguirá ganarse la confianza del director del centro y el respeto de sus compañeros presidiarios, especialmente de Red, el jefe de la mafia de los sobornos.",
        "popularity": 34.771,
        "poster_path": "https://image.tmdb.org/t/p/original/dc1fX265fZIIY5Hab8I7CdETyJy.jpg",
        "production_companies": [
            {
                "id": 97,
                "logo_path": "/7znWcbDd4PcJzJUlJxYqAlPPykp.png",
                "name": "Castle Rock Entertainment",
                "origin_country": "US"
            }
        ],
        "production_countries": [
            {
                "iso_3166_1": "US",
                "name": "United States of America"
            }
        ],
        "release_date": "1994-09-23",
        "revenue": 28341469,
        "runtime": 143,
        "spoken_languages": [
            {
                "iso_639_1": "en",
                "name": "English"
            }
        ],
        "status": "Released",
        "tagline": "El miedo te hace prisionero. Sólo la esperanza puede liberar.",
        "title": "Cadena perpetua",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 16637
    },
};