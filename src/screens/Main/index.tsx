import React, { useState, useCallback } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BottomNavigation,
  BottomNavigationTab,
  Text,
  useTheme
} from "@ui-kitten/components";
import * as Icons from "@expo/vector-icons";

import { routes } from "./routes";

const Stack = createStackNavigator();

// I'm not sure what exactly happens here,
// but it enables gesture navigation
const BottomTab = createMaterialTopTabNavigator();

export default function Main({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainTabs} />
      {routes.screens.map(({ name, component }) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
}

export function MainTabs({ navigation }) {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      tabBarPosition="bottom"
    >
      {routes.tabs.map((nav, i) => {
        return (
          <BottomTab.Screen
            key={nav.name}
            name={nav.name}
            component={nav.component}
            options={{ title: nav.title, icon: nav.icon }}
          />
        );
      })}
    </BottomTab.Navigator>
  );
}

export const TabBar = (props) => {
  const theme = useTheme();

  const onSelect = (index: number): void => {
    const selectedTabRoute: string = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  const createNavigationTabForRoute = (route) => {
    const selectedTabRoute: string = props.state.routeNames[props.state.index];
    const { options } = props.descriptors[route.key];

    const color =
      route.name === selectedTabRoute
        ? theme["color-primary-600"]
        : theme["inactive-button-background"];

    const TitleComponent = useCallback(
      () => (
        <Text category="s1" style={[styles.navTitle, { color }]}>
          {options.title}
        </Text>
      ),
      [selectedTabRoute]
    );

    const Component = Icons[options.icon.library];
    const IconComponent = useCallback(
      () => <Component name={options.icon.name} size={24} color={color} />,
      [selectedTabRoute]
    );

    return (
      <BottomNavigationTab
        key={route.key}
        title={TitleComponent}
        icon={IconComponent}
      />
    );
  };

  const bottomNavigationBorder = {
    // borderTopWidth: 1
    // paddingTop: 20,
    // borderColor: theme["color-basic-200"]
  };

  return (
    <BottomNavigation
      selectedIndex={props.state.index}
      onSelect={onSelect}
      style={[styles.bottomNavigation, bottomNavigationBorder]}
    >
      {props.state.routes.map(createNavigationTabForRoute)}
    </BottomNavigation>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",

    borderWidth: 4,
    borderColor: "red"
  },
  tabStyle: {
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center"
  },
  bottomNavigation: {
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 20
  },
  labelStyle: {},
  navTitle: {
    // color: "#000"
  }
});
