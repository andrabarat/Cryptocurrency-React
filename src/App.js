import { Layout } from "antd";
import { Row, Col } from "antd";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/home/Home";
import Coin from "./components/coin/Coin";

import "./App.scss";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <a href="/home" className="app-title">
          <span>Cryptocurrency</span>
        </a>
      </Header>
      <Content className="content">
        <Row>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 18, offset: 3 }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navigate to="home" />} />
                <Route path="home" element={<Home />} />
                <Route path="coin/:coin" element={<Coin />} />
              </Routes>
            </BrowserRouter>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
