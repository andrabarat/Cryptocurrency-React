import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import CoinCard from "../coin-card/Coin-card";

import "./Coins-container.scss";

function CoinsContainers(props) {
  const coinsList = props.coins.map((comparableCoin) => (
    <Col span={8} key={comparableCoin.currentCoin.id}>
      <Link to={"/coin/" + comparableCoin.currentCoin.symbol}>
        <CoinCard comparableCoin={comparableCoin} />
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
