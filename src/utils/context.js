import React from "react";
import { useState } from "react";
import LocalData from "../data/data";
const url = "https://mdsaymun.github.io/json-data/projects-data/pf1-data.json";
export const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const navLinks = [
    { link: "Home", path: "/", exact: true },
    { link: "About", path: "/about" },
    { link: "Services", path: "/services" },
    { link: "Projects", path: "/projects" },
    { link: "Testimonial", path: "/testimonial" },
    { link: "Blog", path: "/blog" },
    { link: "Contact", path: "/contact" },
  ];

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  React.useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const allData = await response.json();
        setData(allData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return <AppContext.Provider value={{ loading, navLinks, data, LocalData }}>{children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
