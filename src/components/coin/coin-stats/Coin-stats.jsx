import React, { useEffect, useState } from "react";
import { Row, Col, Divider } from "antd";
import moment from "moment";
import numberWithSeparator from "../../shared/js/utils";

import { Colors, ColorsTransparent } from "../../shared/models/Colors";
import LineChart from "../../shared/charts/line-chart/Line-chart";
import DoughnutChart from "../../shared/charts/doughnut-chart/Doughnut-chart";

import "./Coin-stats.scss";

function CoinStats(props) {
  const coin = props.coins[0];
  const orderedCoins = getOrderedCoins();
  const value = (parseFloat(coin.high) + parseFloat(coin.low)) / 2;

  const [state, setState] = useState({
    lineChartLabels: null,
    lineChartTitle: null,
    lineChartLabel: null,
    lineChartData: null,
    lineChartBackgroundColor: null,
    lineChartBorderColor: null,

    doughnutChartLabels: null,
    doughnutChartTitle: null,
    doughnutChartData: null,
    doughnutChartBackgroundColors: null,

    lineChartDataSet: null,
    doughnutChartDataSet: null,

    areGenerated: false,
  });

  let lineChartLabels = null;
  let lineChartTitle = null;
  let lineChartLabel = null;
  let lineChartData = null;
  let lineChartBackgroundColor = null;
  let lineChartBorderColor = null;

  let doughnutChartLabels = null;
  let doughnutChartTitle = null;
  let doughnutChartData = null;
  let doughnutChartBackgroundColors = null;

  let lineChartDataSet = null;
  let doughnutChartDataSet = null;

  function getOrderedCoins() {
    const orderedCoins = [...props.coins];
    orderedCoins.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    return orderedCoins;
  }

  useEffect(() => {
    fillDatasets();
    generateLineChart();
    generateDoughnutChart();
    setState({
      lineChartLabels: lineChartLabels,
      lineChartTitle: lineChartTitle,
      lineChartLabel: lineChartLabel,
      lineChartData: lineChartData,
      lineChartBackgroundColor: lineChartBackgroundColor,
      lineChartBorderColor: lineChartBorderColor,

      doughnutChartLabels: doughnutChartLabels,
      doughnutChartTitle: doughnutChartTitle,
      doughnutChartData: doughnutChartData,
      doughnutChartBackgroundColors: doughnutChartBackgroundColors,

      lineChartDataSet: lineChartDataSet,
      doughnutChartDataSet: doughnutChartDataSet,

      areGenerated: true,
    });
  }, []);

  function fillDatasets() {
    lineChartDataSet = { labels: [], data: [] };
    doughnutChartDataSet = new Map();

    orderedCoins.forEach((coin) => {
      fillLineChartDataSet(coin);
      fillDoughnutChartDataSet(coin);
    });
  }

  function fillLineChartDataSet(coin) {
    lineChartDataSet.labels.push(moment(coin.date).format("DD-MM-yyyy"));
    lineChartDataSet.data.push(coin.high);
  }

  function fillDoughnutChartDataSet(coin) {
    const year = moment(coin.date).year().toString();
    let value = parseFloat(doughnutChartDataSet.get(year));
    if (value) {
      const newValue = value + parseFloat(coin.volume);
      doughnutChartDataSet.set(year, newValue);
    } else {
      doughnutChartDataSet.set(year, coin.volume);
    }
  }

  function generateLineChart() {
    lineChartLabels = lineChartDataSet.labels;
    lineChartTitle = "Distributions of coin's value per day";
    lineChartLabel = "$ per day";
    lineChartData = lineChartDataSet.data;
    lineChartBackgroundColor = ColorsTransparent.Green;
    lineChartBorderColor = Colors.Green;
  }

  function generateDoughnutChart() {
    doughnutChartLabels = Array.from(doughnutChartDataSet.keys());
    doughnutChartData = Array.from(doughnutChartDataSet.values());
    doughnutChartBackgroundColors = getDoughnutChartBackgroundColors(
      doughnutChartLabels.length
    );
    doughnutChartTitle = "Distributions of coin's volume per year";
  }

  function getDoughnutChartBackgroundColors(size) {
    let backgroundColors = [];
    for (let index = 0; index < size; index++) {
      backgroundColors.push(getRandomEnumValue(Colors));
    }
    return backgroundColors;
  }

  function getRandomEnumValue(enumeration) {
    const values = Object.keys(enumeration);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return enumeration[enumKey];
  }

  const layout = (
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
            <span>24H Volume</span>
            {numberWithSeparator(coin.volume)}
          </div>
          <div className="coin-data">
            <span>24H MarketCap</span>
            {numberWithSeparator(coin.marketCap)}
          </div>
        </Col>
      </Row>
      <Divider />
    </>
  );

  if (state.areGenerated) {
    return (
      <>
        {layout}
        <Row>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 18, offset: 3 }}>
            <LineChart
              labels={state.lineChartLabels}
              title={state.lineChartTitle}
              label={state.lineChartLabel}
              data={state.lineChartData}
              backgroundColor={state.lineChartBackgroundColor}
              borderColor={state.lineChartBorderColor}
            />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 18, offset: 3 }}>
            <DoughnutChart
              labels={state.doughnutChartLabels}
              title={state.doughnutChartTitle}
              data={state.doughnutChartData}
              backgroundColors={state.doughnutChartBackgroundColors}
            />
          </Col>
        </Row>
      </>
    );
  } else {
    return <>{layout}</>;
  }
}

export default CoinStats;
