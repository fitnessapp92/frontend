import React, { useState } from "react";
import { TouchableHighlight, View, StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";

const AccessoryRight = ({ units, value }) => {
  const [activeValue, setActiveValue] = useState(value);

  return (
    <View style={styles.container}>
      {units.map((unit) => (
        <TouchableHighlight
          underlayColor="transparent"
          style={[styles.item, activeValue === unit.value && styles.activeBg]}
          key={unit.value}
          onPress={() => setActiveValue(unit.value)}
        >
          <Text style={[activeValue === unit.value && styles.activeText]}>
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
    backgroundColor: "#05CAB6"
  },
  text: {},
  activeBg: {
    backgroundColor: "transparent"
  },
  activeText: {
    color: "#05CAB6"
  }
});

export default AccessoryRight;
