import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import CoinCard from "../coin-card/Coin-card";

import "./Coins-container.scss";

function CoinsContainers(props) {
  const coinsList = props.coins.map((comparableCoins) => (
    <Col span={8} key={comparableCoins.currentCoin.id}>
      <Link to={"/coin/" + comparableCoins.currentCoin.symbol}>
        <CoinCard comparableCoins={comparableCoins} />
      </Link>
    </Col>
  ));
  return (
    <div className="coins">
      <Row gutter={[16, 16]}>{coinsList}</Row>
    </div>
  );
}

export default CoinsContainers;
