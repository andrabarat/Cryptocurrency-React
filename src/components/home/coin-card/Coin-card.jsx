import React from "react";
import { Card } from "antd";
import PriceValue from "../../shared/price-value/Price-value";
import numberWithSeparator from "../../shared/js/utils";

import "./Coin-card.scss";

function CoinCard(props) {
  const coin = props.comparableCoins.currentCoin;

  const title = (
    <>
      <div className="coin-title">
        <span> {coin.symbol}</span>
        <span>$ {numberWithSeparator(coin.high)}</span>
      </div>
    </>
  );
  return (
    <Card className="coin" title={title}>
      <div className="coin-body">
        <span>{coin.name}</span>
        <span>
          <PriceValue comparableCoins={props.comparableCoins} />
        </span>
      </div>
    </Card>
  );
}

export default CoinCard;
