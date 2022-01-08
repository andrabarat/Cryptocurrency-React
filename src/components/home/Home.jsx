import React, { useState, useEffect } from "react";
import { Skeleton, Result } from "antd";
import CoinsContainers from "./coins-container/Coins-container";

function Home() {
  let { coins } = [];

  const [
    state = {
      coins: [],
      areFetched: false,
      isError: false,
    },
    setState,
  ] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/coins")
      .then((res) => res.json())
      .then((json) => {
        setState({
          coins: json,
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
  }, [coins]);

  if (!state.areFetched) return <Skeleton active />;
  if (state.isError)
    return (
      <Result
        status="404"
        title="There seems to be some problems!"
        subTitle="SSorry, please try again later."
      />
    );

  return <CoinsContainers coins={state.coins} />;
}

export default Home;
