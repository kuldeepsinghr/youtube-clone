import React, { createContext, useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY_1,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};


const [isLoading, setIsLoading] = useState(false);
const [data, setData] = useState([]);
const [query, setQuery] = useState("");

const home_Url = "https://youtube138.p.rapidapi.com/search/?q=songs&hl=en&gl=US";

//   allVideos
  const fetchApi = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      setData(result.contents);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    fetchApi(home_Url);
  }, []);

  return <AppContext.Provider value={{
    data,
    fetchApi,
    options,
    setIsLoading,
    setQuery,
    query,
    isLoading
  }}>
    {children}
    </AppContext.Provider>;
};

export const useYoutube = () => useContext(AppContext);
