import React, { useState } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { Text, Button, Slider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Home";
import Motivation from "./Motivation";
import Settings from "./Settings";
import Report from "./Report";

const Tab = createBottomTabNavigator();

export default function Main({ navigation }) {
  return (
    <Tab.Navigator tabBarOptions={{ tabStyle: styles.tabStyle }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Motivation" component={Motivation} />
      <Tab.Screen name="Report" component={Report} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderWidth: 4,
    borderColor: "red",
  },
  tabStyle: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
