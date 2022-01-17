import React from "react";
import { Tag } from "antd";
import { UpOutlined, RightOutlined, DownOutlined } from "@ant-design/icons";

import { Status } from "../models/StatusEnum";

import "./Price-value.scss";

function PriceValue(props) {
  const value = () => {
    const number =
      props.comparableCoins.currentCoin.high /
      props.comparableCoins.previousCoin.high;
    return number.toFixed(3);
  };

  const coin = props.comparableCoins.currentCoin;

  const tag = () => {
    switch (coin.status) {
      case Status.Increased: {
        return (
          <Tag color="#27ae60" className="tag">
            <UpOutlined />
            <span className="value">{value()} %</span>
          </Tag>
        );
      }
      case Status.Stall: {
        return (
          <Tag color="#2c3e50" className="tag">
            <RightOutlined />
            <span className="value">{value()} %</span>
          </Tag>
        );
      }
      case Status.Decreased: {
        return (
          <Tag color="#c0392b" className="tag">
            <DownOutlined />
            <span className="value">{value()} %</span>
          </Tag>
        );
      }
      default:
        return <></>;
    }
  };

  return <>{tag()}</>;
}

export default PriceValue;
