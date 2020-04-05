import React, { useState } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { Text, Button, Slider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Report({ navigation }) {
  return (
    <View style={styles.container}>
      <Text h1>Report</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#282c34",
    width: "100%",
    height: "100%",
    borderWidth: 4,
    borderColor: "red",
  },
});
