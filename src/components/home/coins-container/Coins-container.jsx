import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import CoinCard from "../coin-card/Coin-card";

import "./Coins-container.scss";

function CoinsContainers(props) {
  const coinsList = props.coins.map((comparableCoins) => (
    <Col xs={24} md={12} lg={12} xl={8} key={comparableCoins.currentCoin.id}>
      <Link to={"/coin/" + comparableCoins.currentCoin.symbol}>
        <CoinCard comparableCoins={comparableCoins} />
      </Link>
    </Col>
  ));
  return (
    <div className="coins">
      <Row gutter={[32, 32]}>{coinsList}</Row>
    </div>
  );
}

export default CoinsContainers;
