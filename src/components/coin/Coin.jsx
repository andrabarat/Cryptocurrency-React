import React, { useState,  useEffect} from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Divider, Tabs, Skeleton, Result } from "antd";

import CoinDetails from "./coin-details/Coin-details";
import CoinStats from "./coin-stats/Coin-stats";

import "./Coin.scss";

const { TabPane } = Tabs;

function Coin() {
  let { symbol } = useParams();

  const [state, setState] = useState({
    coins: [],
    areFetched: false,
    isError: true,
  });

  useEffect(() => {
    fetch("https://localhost:44302/api/coins/" + symbol)
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((json) => {
        setState({
          coins: json,
          areFetched: true,
          isError: false,
        });
      })
      .catch(() => {
        setState({
          coins: [],
          areFetched: true,
          isError: true,
        });
      });
  }, []);

  const layout = (
    <>
      <Row align="middle" justify="space-around">
        <Col>
          <h1 className="title">{symbol}</h1>
        </Col>
      </Row>
      <Divider />
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
      <Tabs size="large" centered type="card">
        <TabPane tab="Stats" key="stats">
          <CoinStats coins={state.coins} />
        </TabPane>
        <TabPane tab="Details" key="details">
          <CoinDetails coins={state.coins} />
        </TabPane>
      </Tabs>
    </>
  );
}

export default Coin;
