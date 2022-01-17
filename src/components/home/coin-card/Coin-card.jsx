import React from "react";
import PriceValue from "../../shared/price-value/Price-value";
import numberWithSeparator from "../../shared/js/utils";

import { Status } from "../../shared/models/StatusEnum";

import "./Coin-card.scss";

function CoinCard(props) {
  const coin = props.comparableCoins.currentCoin;

  return (
    <div
      className={
        coin.status === Status.Decreased
          ? "coin decreased"
          : coin.status === Status.Stalled
          ? "coin stalled"
          : coin.status === Status.Increased
          ? "coin increased"
          : "coin"
      }
    >
      <div className="coin-title">
        <span className="name">{coin.name}</span>
        <span className="value">$ {numberWithSeparator(coin.high)}</span>
      </div>
      <div className="coin-body">
        <span className="symbol"> {coin.symbol}</span>
        <PriceValue comparableCoins={props.comparableCoins} />
      </div>
    </div>
  );
}

export default CoinCard;
