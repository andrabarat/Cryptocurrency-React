import React, { useState } from "react";
import { Skeleton, Result, Table } from "antd";
import moment from "moment";
import ComparableIcon from "../comparable-icon/Comparable-icon";

import "./Coin-details.scss";

function CoinDetails() {
  const [state, setState] = useState({
    coins: [],
    areFetched: false,
    isError: true,
  });

  const formatNumberSeparator = (text) => {
    const numberArray = text.split(".");
    const beforeComma = numberArray[0].replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      "$1,"
    );
    return beforeComma + "." + numberArray[1];
  };

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
        const isInRange = index < state.coins.length - 1;
        return (
          <>
            <span className="space-between">{formatNumberSeparator(text)}</span>
            {isInRange ? (
              <ComparableIcon
                value={state.coins[index].high}
                perviousValue={state.coins[index + 1].high}
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
        const isInRange = index < state.coins.length - 1;
        return (
          <>
            <span className="space-between">{formatNumberSeparator(text)}</span>
            {isInRange ? (
              <ComparableIcon
                value={state.coins[index].low}
                perviousValue={state.coins[index + 1].low}
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
        const isInRange = index < state.coins.length - 1;
        return (
          <>
            <span className="space-between">{formatNumberSeparator(text)}</span>
            {isInRange ? (
              <ComparableIcon
                value={state.coins[index].open}
                perviousValue={state.coins[index + 1].open}
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
        const isInRange = index < state.coins.length - 1;
        return (
          <>
            <span className="space-between">{formatNumberSeparator(text)}</span>
            {isInRange ? (
              <ComparableIcon
                value={state.coins[index].close}
                perviousValue={state.coins[index + 1].close}
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
        const isInRange = index < state.coins.length - 1;
        return (
          <>
            <span className="space-between">{formatNumberSeparator(text)}</span>
            {isInRange ? (
              <ComparableIcon
                value={state.coins[index].volume}
                perviousValue={state.coins[index + 1].volume}
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
        const isInRange = index < state.coins.length - 1;
        return (
          <>
            <span className="space-between">{formatNumberSeparator(text)}</span>
            {isInRange ? (
              <ComparableIcon
                value={state.coins[index].marketCap}
                perviousValue={state.coins[index + 1].marketCap}
              ></ComparableIcon>
            ) : (
              <></>
            )}
          </>
        );
      },
    },
  ];

  const getCoins = (symbol) => {
    fetch("https://localhost:44302/api/coins/" + symbol)
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((json) => {
        setState({
          coins: json,
          areFetched: true,
          isError: false,
        });
      })
      .catch(() => {
        setState({
          areFetched: true,
          isError: true,
        });
      });
  };

  if (!state.areFetched)
    return (
      <>
        <Skeleton active />
      </>
    );

  if (state.isError)
    return (
      <>
        <Result
          status="404"
          title="There seems to be some problems!"
          subTitle="Sorry, please try again later."
        />
      </>
    );

  return (
    <>
      <Table
        columns={columns}
        dataSource={state.coins}
        pagination={false}
        rowKey="id"
      />
    </>
  );
}

export default CoinDetails;
