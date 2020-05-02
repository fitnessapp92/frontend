import React, { useState, useCallback } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Text,
  useTheme
} from "@ui-kitten/components";
import * as Icons from "@expo/vector-icons";

import Home from "./Home";
import Motivation from "./Motivation";
import Settings from "./Settings";
import Report from "./Report";

// I'm not sure what exactly happens here,
// but it enables gesture navigation
const BottomTab = createMaterialTopTabNavigator();

const navs = [
  {
    name: "Home",
    title: "Home",
    component: Home,
    icon: {
      library: "FontAwesome",
      name: "home"
    }
  },
  {
    name: "Motivation",
    title: "Motivation",
    component: Motivation,
    icon: {
      library: "FontAwesome5",
      name: "fist-raised"
    }
  },
  {
    name: "Report",
    title: "Report",
    component: Report,
    icon: {
      library: "MaterialCommunityIcons",
      name: "account-circle"
    }
  },
  {
    name: "Settings",
    title: "Settings",
    component: Settings,
    icon: {
      library: "MaterialIcons",
      name: "settings"
    }
  }
];

export default function Main({ navigation }) {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      tabBarPosition="bottom"
    >
      {navs.map((nav, i) => {
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

  return (
    <BottomNavigation
      selectedIndex={props.state.index}
      onSelect={onSelect}
      style={styles.bottomNavigation}
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
    backgroundColor: "#fff"
  },
  labelStyle: {},
  navTitle: {
    // color: "#000"
  }
});
