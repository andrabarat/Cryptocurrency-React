import React from "react";
import { Skeleton } from "antd";
import CoinsContainers from "./coins-container/Coins-container";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://localhost:44302/api/coins")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <Skeleton active />;

    return <CoinsContainers coins={items} />;
  }
}

export default Home;
