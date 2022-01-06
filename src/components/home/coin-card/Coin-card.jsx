import React from "react";
import { Card } from "antd";

import "./Coin-card.css";

class CoinCard extends React.Component {
  state = {
    coin: this.props.coin,
  };
  render() {
    return (
      <Card className="coin" title={this.state.coin.symbol}>
        <p>{this.state.coin.name}</p>
      </Card>
    );
  }
}

export default CoinCard;
