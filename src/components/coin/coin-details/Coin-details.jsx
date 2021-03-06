import React from "react";
import { Table } from "antd";
import moment from "moment";
import ComparableIcon from "../comparable-icon/Comparable-icon";
import numberWithSeparator from "../../shared/js/utils";

import "./Coin-details.scss";

function CoinDetails(props) {
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "right",
      render: (text) => <span>{moment(text).format("DD-MM-yyyy")}</span>,
    },
    {
      title: "High",
      dataIndex: "high",
      key: "high",
      align: "right",
      render: (text, record, index) => {
        const isInRange = index < props.coins.length - 1;
        return (
          <>
            <span className="space-between">$ {numberWithSeparator(text)}</span>
            {isInRange ? (
              <ComparableIcon
                value={props.coins[index].high}
                perviousValue={props.coins[index + 1].high}
              ></ComparableIcon>
            ) : (
              <></>
            )}
          </>
        );
      },
    },
    {
      title: "Low",
      dataIndex: "low",
      key: "low",
      align: "right",
      render: (text, record, index) => {
        const isInRange = index < props.coins.length - 1;
        return (
          <>
            <span className="space-between">$ {numberWithSeparator(text)}</span>
            {isInRange ? (
              <ComparableIcon
                value={props.coins[index].low}
                perviousValue={props.coins[index + 1].low}
              ></ComparableIcon>
            ) : (
              <></>
            )}
          </>
        );
      },
    },
    {
      title: "Open",
      dataIndex: "open",
      key: "open",
      align: "right",
      render: (text, record, index) => {
        const isInRange = index < props.coins.length - 1;
        return (
          <>
            <span className="space-between">{numberWithSeparator(text)}</span>
            {isInRange ? (
              <ComparableIcon
                value={props.coins[index].open}
                perviousValue={props.coins[index + 1].open}
              ></ComparableIcon>
            ) : (
              <></>
            )}
          </>
        );
      },
    },
    {
      title: "Close",
      dataIndex: "close",
      key: "close",
      align: "right",
      render: (text, record, index) => {
        const isInRange = index < props.coins.length - 1;
        return (
          <>
            <span className="space-between">{numberWithSeparator(text)}</span>
            {isInRange ? (
              <ComparableIcon
                value={props.coins[index].close}
                perviousValue={props.coins[index + 1].close}
              ></ComparableIcon>
            ) : (
              <></>
            )}
          </>
        );
      },
    },
    {
      title: "Volume",
      dataIndex: "volume",
      key: "volume",
      align: "right",
      render: (text, record, index) => {
        const isInRange = index < props.coins.length - 1;
        return (
          <>
            <span className="space-between">{numberWithSeparator(text)}</span>
            {isInRange ? (
              <ComparableIcon
                value={props.coins[index].volume}
                perviousValue={props.coins[index + 1].volume}
              ></ComparableIcon>
            ) : (
              <></>
            )}
          </>
        );
      },
    },
    {
      title: "MarketCap",
      dataIndex: "marketCap",
      key: "marketCap",
      align: "right",
      render: (text, record, index) => {
        const isInRange = index < props.coins.length - 1;
        return (
          <>
            <span className="space-between">{numberWithSeparator(text)}</span>
            {isInRange ? (
              <ComparableIcon
                value={props.coins[index].marketCap}
                perviousValue={props.coins[index + 1].marketCap}
              ></ComparableIcon>
            ) : (
              <></>
            )}
          </>
        );
      },
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={props.coins}
        rowKey="id"
        bordered
      />
    </>
  );
}

export default CoinDetails;
