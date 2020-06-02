import React, { useState } from "react";
import { TouchableHighlight, View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

import { Unit } from "./types";

type Props<T extends string> = {
  units: Unit<T>[];
  value: T;
  onPress: (v: T) => void;
};

const AccessoryRight = <T extends string>({
  units,
  value,
  onPress
}: Props<T>): React.ReactElement | null => {
  const [activeValue, setActiveValue] = useState<T>(value);

  const handleActiveValue = (value: T) => {
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
