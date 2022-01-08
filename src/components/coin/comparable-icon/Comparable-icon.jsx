import React from "react";
import {
  ArrowUpOutlined,
  ArrowRightOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

import "./Comparable-icon.scss";

function ComparableIcon(props) {
  const valueNumber = Number(props.value);
  const perviousValueNumber = Number(props.perviousValue);

  if (valueNumber > perviousValueNumber) return <ArrowUpOutlined rotate={45} />;
  if (valueNumber === perviousValueNumber) return <ArrowRightOutlined />;
  if (valueNumber < perviousValueNumber)
    return <ArrowDownOutlined rotate={45} />;
  return <></>;
}

export default ComparableIcon;
