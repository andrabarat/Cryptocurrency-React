import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Divider, Tabs } from "antd";
import CoinDetails from "./coin-details/Coin-details";
import "./Coin.scss";

const { TabPane } = Tabs;

function Coin() {
  let { symbol } = useParams();

  const tabClicked = (key) => {
    if (key === "2") {
      console.log("child get coins");
    }
  };

  const layout = (
    <>
      <Row align="middle" justify="space-around">
        <Col>
          <h1 className="title">{symbol}</h1>
        </Col>
      </Row>
      <Divider />
      <Tabs size="large" centered type="card" onTabClick={tabClicked}>
        <TabPane tab="Stats" key="1">
          Coin stats
        </TabPane>
        <TabPane tab="Details" key="2">
          <CoinDetails />
        </TabPane>
      </Tabs>
    </>
  );

  return <>{layout}</>;
}

export default Coin;
