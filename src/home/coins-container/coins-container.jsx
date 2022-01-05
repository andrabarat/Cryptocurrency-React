import React from "react";
import { Col, Row } from "antd";
import CoinCard from "../coin-card/coin-card";

import "./coins-container.css";

class Containers extends React.Component {
  state = {
    coins: this.props.coins,
  };

  render() {
    const listCoins = this.state.coins.map((coin) => (
      <Col span={8} key={coin.id}>
        <CoinCard coin={coin} />
      </Col>
    ));
    return (
      <div className="coins">
        <Row gutter={[16, 16]}>{listCoins}</Row>
      </div>
    );
  }
}

export default Containers;
