import React from "react";
import { Card } from "antd";

import "./Coin-card.scss";

function CoinCard(props) {
  return (
    <Card className="coin" title={props.coin.symbol}>
      <p>{props.coin.name}</p>
    </Card>
  );
}

export default CoinCard;
