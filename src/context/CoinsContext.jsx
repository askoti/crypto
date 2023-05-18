import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const CryptoCoinsContext = createContext();

const CoinsContext = ({ children }) => {
  const [coins, setCoins] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPAge] = useState(20) 
  const [sidebar, setSidebar] = useState(false)

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://api.coinstats.app/public/v1/coins?limit=600"
      );
      setCoins(data.coins);
      setLoading(false);
    } catch (err) {
        setLoading(false)
        setError(err);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [])


  const indexOfLastPost = currentPage * postPerPage
  const indexOfFistPost = indexOfLastPost - postPerPage
  const currentPost = coins?.slice(indexOfFistPost, indexOfLastPost)
  const totalPosts = coins?.length
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const toggleSidebar = () => setSidebar(!sidebar)

  return (
    <CryptoCoinsContext.Provider value={{ currentPost, loading, error, totalPosts, postPerPage, paginate, currentPage, toggleSidebar, sidebar, setSidebar }}>
      {children}
    </CryptoCoinsContext.Provider>
  );
};

export default CoinsContext;

export const useCoinsContext = () => useContext(CryptoCoinsContext)
