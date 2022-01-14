import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Divider, Tabs } from "antd";
import CoinDetails from "./coin-details/Coin-details";
import "./Coin.scss";

const { TabPane } = Tabs;

function Coin() {
  let { symbol } = useParams();

  const [state, setState] = useState({
    coinDetails: {
      coins: [],
      areFetched: false,
      isError: true,
    },
  });

  const tabClicked = (key) => {
    if (key === "details") {
      console.log("child get coins");
      getCoins(symbol);
    }
  };

  const getCoins = (symbol) => {
    fetch("https://localhost:44302/api/coins/" + symbol)
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((json) => {
        setState({
          coinDetails: {
            coins: json,
            areFetched: true,
            isError: false,
          },
        });
      })
      .catch(() => {
        setState({
          coinDetails: {
            coins: [],
            areFetched: true,
            isError: true,
          },
        });
      });
  };

  return (
    <>
      <Row align="middle" justify="space-around">
        <Col>
          <h1 className="title">{symbol}</h1>
        </Col>
      </Row>
      <Divider />
      <Tabs size="large" centered type="card" onTabClick={tabClicked}>
        <TabPane tab="Stats" key="stats">
          Coin stats
        </TabPane>
        <TabPane tab="Details" key="details">
          <CoinDetails coinDetails={state.coinDetails} />
        </TabPane>
      </Tabs>
    </>
  );
}

export default Coin;
