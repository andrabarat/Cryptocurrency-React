import React from "react";
import { Tag } from "antd";
import { UpOutlined, RightOutlined, DownOutlined } from "@ant-design/icons";

import { Status } from "../models/StatusEnum";

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
          <Tag color="#27ae60">
            <UpOutlined />
            <span>{value()} %</span>
          </Tag>
        );
      }
      case Status.Stall: {
        return (
          <Tag color="#2c3e50">
            <RightOutlined />
            <span>{value()} %</span>
          </Tag>
        );
      }
      case Status.Decreased: {
        return (
          <Tag color="#c0392b">
            <DownOutlined />
            <span>{value()} %</span>
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
