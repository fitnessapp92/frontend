import React, { useState } from "react";
import { TouchableHighlight, View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

import { Units } from "./types";

type Props = {
  units: Units;
};

const AccessoryRight: React.FC<Props> = ({ units, value, onPress }) => {
  const [activeValue, setActiveValue] = useState(value);

  const handleActiveValue = (value) => {
    onPress(value);
    setActiveValue(value);
  };

  return (
    <View style={styles.container}>
      {units.map((unit) => (
        <TouchableHighlight
          underlayColor="#05CAB6"
          style={[styles.item, activeValue === unit.value && styles.activeBg]}
          key={unit.value}
          onPress={() => handleActiveValue(unit.value)}
        >
          <Text
            style={[
              styles.text,
              activeValue === unit.value && styles.activeText
            ]}
          >
            {unit.title}
          </Text>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "transparent"
    // color: "#05CAB6"
  },
  text: {
    color: "#05CAB6"
  },
  activeBg: {
    backgroundColor: "#05CAB6"
  },
  activeText: {
    color: "#fff"
  }
});

export default AccessoryRight;
