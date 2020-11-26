import { useSelector } from "react-redux";

export const useSelectorHook = (param) =>
  useSelector((state) => state[param] || state);

export const API_PROD_URL = `http://prod/getWordListByDigits`; // TODO: when configure the prod it will change
export const API_LOCAL_URL = `http://localhost:3001/getWordListByDigits`;

export const getApiUrlByEnv = () => {
  let url = API_LOCAL_URL;
  if (process.env.NODE_ENV === "production") {
    url = API_PROD_URL;
  }
  return url;
};
