import React from "react";
import { Card } from "antd";

import "./Coin-card.scss";

function CoinCard(props) {
  return (
    <Card className="coin" title={props.comparableCoin.currentCoin.symbol}>
      <p>{props.comparableCoin.currentCoin.name}</p>
    </Card>
  );
}

export default CoinCard;
