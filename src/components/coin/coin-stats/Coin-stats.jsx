import React from "react";
import { Row, Col, Divider } from "antd";
import numberWithSeparator from "../../shared/js/utils";

import "./Coin-stats.scss";

function CoinStats(props) {
  const coin = props.coins[0];
  const value = (parseFloat(coin.high) + parseFloat(coin.low)) / 2;

  return (
    <>
      <Row className="coin-details">
        <Col xs={24} xl={15}>
          <div className="coin-name">{coin.name}</div>
          <div className="coin-value">
            <span>$</span>
            {numberWithSeparator(value.toString())}
          </div>
        </Col>
        <Col xs={24} xl={9}>
          <div className="coin-data">
            <span>24H Low</span>$ {numberWithSeparator(coin.low)}
          </div>
          <div className="coin-data">
            <span>24H High</span>$ {numberWithSeparator(coin.high)}
          </div>
          <div className="coin-data">
            <span>24H Volume</span> {numberWithSeparator(coin.volume)}
          </div>
          <div className="coin-data">
            <span>24H MarketCap</span> {numberWithSeparator(coin.marketCap)}
          </div>
        </Col>
      </Row>
      <Divider />
    </>
  );
}

export default CoinStats;
