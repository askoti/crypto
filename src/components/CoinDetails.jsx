import { Link, useParams } from "react-router-dom";
import useFetchCoin from "../context/useFetchCoin";
import { FaArrowLeft, FaCode, FaMoneyBillAlt } from "react-icons/fa";
import { timeData } from "../assets/somedata";
import "../styles/CoinDetails.css";
import { useState } from "react";
import useFetchChartData from "../context/useFetchChartData";
import { Line, LineChart } from "recharts";
import Chart from "./Chart";
import '../styles/CoinDetailsMd.css'
import '../styles/CoinDetailsSm.css'
import '../styles/CoinDetailsXs.css'


const CoinDetails = () => {
  const [period, setPeriod] = useState("24h");
  const { id } = useParams();
  const { coin, loading, error } = useFetchCoin(id);
  const { chartData } = useFetchChartData(id, period);

  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (loading) {
    <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <Link to={"/coins"} className="backhome">
        <i>
          <FaArrowLeft />
        </i>
      </Link>
      <div className="cointainer">
        <div className="head">
          <div className="name">
            <img src={coin?.icon} alt="" />
            <h1>{coin?.name}</h1>
            <p>{coin?.symbol}</p>
          </div>
          <div className="icons">
            <i>
              <FaCode />
            </i>
            <i>
              <FaMoneyBillAlt />
            </i>
          </div>
        </div>
        <div className="price-details">
          <div className="price">
            <h1>
              ${coin?.price.toFixed(4)}
              <span className="usd-span">USD</span>
            </h1>
          </div>
          <div className="time">
            {timeData.map(({ name, url }) => {
              return <button onClick={() => setPeriod(url)}>{name}</button>;
            })}
          </div>
        </div>
        <div className="chart">
          <Chart chartData={chartData} name={coin?.name} />
        </div>
        <div className="details">
          <div className="details-box">
            <div className="detail">
              <p>Market Cap</p>
              <h3>
                ${numberWithCommas(coin?.marketCap.toFixed(0))}{" "}
                <span className="span">USD</span>
              </h3>
            </div>
            <div className="detail">
              <p>Volume</p>
              <h3>
                ${numberWithCommas(coin?.volume.toFixed(0))}{" "}
                <span className="span">USD</span>
              </h3>
            </div>
          </div>
          <div className="details-box">
            <div className="detail">
              <p>Available Supply</p>
              <h3>
                ${numberWithCommas(coin?.availableSupply)}{" "}
                <span className="span">USD</span>
              </h3>
            </div>
            <div className="detail">
              <p>Total Supply</p>
              <h3>
                ${numberWithCommas(coin?.totalSupply)}{" "}
                <span className="span">USD</span>
              </h3>
            </div>
          </div>
        <div className="bar">
          <p>Trading activity</p>
          <progress className="progress-bar" value="95" max="100"></progress>
          <div className="buy-sell">
            <h3>95% <span className="bs">BUY</span></h3>
            <h3>95% <span className="bs">SELL</span></h3>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
