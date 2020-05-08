import React from "react";
import { StyleSheet } from "react-native";
import classnames from "classnames";

type Props = {
  className: string;
  type: string;
  strokeW: number;
};

export const Chart: React.FC<Props> = ({ type, strokeW }) => {
  const className = classnames(
    "brz-counter-chart",
    `brz-counter-chart-${type}`
  );
  const classNameBg = classnames("brz-counter-pie-chart");

  return (
    <div className={className}>
      <svg className="" style={styles.svg} viewBox="0 0 32 32">
        {type === "radial" && (
          <circle
            className="brz-counter-radial-chart"
            r={16 - strokeW / 4}
            cx="16"
            cy="16"
          ></circle>
        )}
        {type === "empty" && (
          <circle
            className="brz-counter-radial-chart"
            r={16 - strokeW / 4}
            cx="16"
            cy="16"
          ></circle>
        )}
        <circle
          className={classNameBg}
          style={styles.circle}
          r="16"
          cx="16"
          cy="16"
        ></circle>
      </svg>
    </div>
  );
};

const styles = StyleSheet.create({
  svg: {
    width: "100%",
    height: "100%",
    transform: [{ rotateX: "-90deg" }],
    backgroundColor: "#9acd32",
    borderRadius: "50%"
  },
  circle: {
    strokeWidth: 4;
  }
});
