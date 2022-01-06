import React from "react";
import { Col, Row } from "antd";
import CoinCard from "../coin-card/Coin-card";

import "./Coins-container.css";

class CoinsContainers extends React.Component {
  state = {
    coins: this.props.coins,
  };

  render() {
    const coinsList = this.state.coins.map((coin) => (
      <Col span={8} key={coin.id}>
        <CoinCard coin={coin} />
      </Col>
    ));
    return (
      <div className="coins">
        <Row gutter={[16, 16]}>{coinsList}</Row>
      </div>
    );
  }
}

export default CoinsContainers;
