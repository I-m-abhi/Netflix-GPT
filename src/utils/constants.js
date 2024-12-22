export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer' + import.meta.env.VITE_TMDB_KEY,
  }
};

// export const API_OPTIONS = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjM2OWJjNzU5NTk0NDczNGJjYjI2MGY1ODdlYmY4YSIsIm5iZiI6MTcxNDQ2ODc4Mi4wNDEsInN1YiI6IjY2MzBiN2FlMjQ3NmYyMDEyYmZiYmJkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oDDZbjECwZ9Ym1bew2e4ASwI6Xcmd0zatEHVR4kFXg8'
//   }
// };

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500';

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;