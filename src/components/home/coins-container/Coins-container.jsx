import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import CoinCard from "../coin-card/Coin-card";

import "./Coins-container.scss";

function CoinsContainers(props) {
  const coinsList = props.coins.map((coin) => (
    <Col span={8} key={coin.id}>
      <Link to={"/coin/" + coin.symbol}>
        <CoinCard coin={coin} />
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
