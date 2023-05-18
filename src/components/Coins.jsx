import React from "react";
import "../styles/Coins.css";
import { useCoinsContext } from "../context/CoinsContext";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const Coins = () => {
  const { currentPost, loading, error } = useCoinsContext();
  const navigate = useNavigate();
  const handleIdClick = (id) => {
    navigate(`/coins/${id}`);
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  console.log(currentPost);

  return (
    <div>
      <table className="table">
        <tr className="tablehead">
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Price BTC</th>
          <th>24h Change</th>
        </tr>
        {currentPost &&
          currentPost.map(({ id, icon, name, rank, price, priceChange1d, symbol, priceBtc }) => (
              <tr key={id} className="tabledata" onClick={() => handleIdClick(id)}>
                <td>{rank}</td>
                <td
                  className="nametd"
                >
                  <span>
                    <img
                      src={icon}
                      width={35}
                      alt=''
                      style={{ marginBottom: "-10px" }}
                    />
                  </span>
                  <span style={{ margin: "10px" }}>{name.length > 9 ? symbol : name}</span>
                </td>
                <td>${numberWithCommas(price.toFixed(2))}</td>
                <td>&#8383;{priceBtc.toFixed(6)}</td>
                <td style={{color: priceChange1d.toString().startsWith('-', 0) ? '#ff4d4d' : '#6ccf59'}}>{priceChange1d.toString().startsWith('-', 0) ? priceChange1d : '+'+priceChange1d}</td>
              </tr>
          ))}
      </table>
      <Pagination />
    </div>
  );
};

export default Coins;
