import { Layout } from "antd";
import { Row, Col } from "antd";
import Home from "./components/home/Home";

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
            <Home />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
