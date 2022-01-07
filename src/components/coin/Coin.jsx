import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "antd";
import CoinModel from "../models/CoinModel";

function Coin() {
  let { coin } = useParams();

  const [
    state = {
      coin: CoinModel,
      DataisLoaded: false,
    },
    setState,
  ] = useState([]);

  useEffect(() => {
    fetch("https://cryptocurrencyapi.azurewebsites.net/api/coins/" + coin)
      .then((res) => res.json())
      .then((json) => {
        setState({
          coin: json,
          DataisLoaded: true,
        });
      });
  }, [coin]);

  if (!state.DataisLoaded) return <Skeleton active />;

  return (
    <div>
      <div>Coin id: {state.coin.id}</div>
      <div>Coin name: {state.coin.name}</div>
      <div>Coin symbol: {state.coin.symbol}</div>
      <div>Coin date: {state.coin.date}</div>
      <div>Coin high: {state.coin.high}</div>
      <div>Coin low: {state.coin.low}</div>
      <div>Coin open: {state.coin.open}</div>
      <div>Coin close: {state.coin.close}</div>
      <div>Coin volume: {state.coin.volume}</div>
      <div>Coin marketCap: {state.coin.marketCap}</div>
    </div>
  );
}

export default Coin;
