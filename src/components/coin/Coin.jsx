import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Skeleton, Result } from "antd";
import CoinModel from "../models/CoinModel";

function Coin() {
  let { coin } = useParams();

  const [
    state = {
      coin: CoinModel,
      areFetched: false,
      isError: true,
    },
    setState,
  ] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7001/api/coins/" + coin)
      .then((res) => res.json())
      .then((json) => {
        setState({
          coin: json,
          areFetched: true,
          isError: false,
        });
      })
      .catch(() => {
        setState({
          areFetched: true,
          isError: true,
        });
      });
  }, [coin]);

  if (!state.areFetched) return <Skeleton active />;
  if (state.isError)
    return (
      <Result
        status="404"
        title="There seems to be some problems!"
        subTitle="SSorry, please try again later."
      />
    );

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
