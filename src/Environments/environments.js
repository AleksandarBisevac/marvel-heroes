import md5 from "md5";

export const environments = {
  ENDPOINTS: {
    allCharacters__url: "https://gateway.marvel.com/v1/public/characters",
  },
  API_KEY__EXT: "?apikey=",
  API_KEY__PRIVATE: "0e17f92581a52a95e00bb75ef5930d567097e9fb",
  API_KEY__PUBLIC: "fa7242e2bb7fa11add6f31bcb0fd6924",
};
export let ts = new Date().getTime();
export const md5Hash = md5(
  ts + environments.API_KEY__PRIVATE + environments.API_KEY__PUBLIC
);
