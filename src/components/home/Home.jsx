import React, { useState, useEffect } from "react";
import { Skeleton, Result, Row, Col, Divider } from "antd";
import { Status } from "../shared/models/StatusEnum";
import CoinsContainers from "./coins-container/Coins-container";

function Home() {
  const [state, setState] = useState({
    coins: [],
    areFetched: false,
    isError: false,
  });

  useEffect(() => {
    fetch("https://localhost:44302/api/coins")
      .then((res) => res.json())
      .then((json) => {
        fillStatus(json);
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
  }, []);

  function fillStatus(coins) {
    coins.forEach((coin) => {
      coin.currentCoin.status = getStatus(coin.currentCoin, coin.previousCoin);
    });
  }

  function getStatus(currentCoin, previousCoin) {
    if (currentCoin.high > previousCoin.high) {
      return Status.Increased;
    }
    if (currentCoin.high === previousCoin.high) {
      return Status.Stalled;
    }
    if (currentCoin.high < previousCoin.high) {
      return Status.Decreased;
    }
    return Status.None;
  }

  const layout = (
    <>
      <Row align="middle" justify="space-around">
        <Col>
          <h1 className="title">Coins</h1>
        </Col>
      </Row>
      <Divider />
      <br />
    </>
  );

  if (!state.areFetched)
    return (
      <>
        {layout}
        <Skeleton active />
      </>
    );
  if (state.isError)
    return (
      <>
        {layout}
        <Result
          status="404"
          title="There seems to be some problems!"
          subTitle="Sorry, please try again later."
        />
      </>
    );

  return (
    <>
      {layout}
      <CoinsContainers coins={state.coins} />
    </>
  );
}

export default Home;
