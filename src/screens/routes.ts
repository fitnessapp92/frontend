import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import Greeting from "./Greeting";
import UserData from "./UserData";
import Main from "./Main";

type typeRouteNames = "Greeting" | "UserData" | "Main";

type Routes = {
  name: typeRouteNames;
  component: React.ComponentType<any>;
}[];

export type RootStackParamList = Record<typeRouteNames, undefined>;

export type GreetingScreenRouteProp = StackNavigationProp<
  RootStackParamList,
  "Greeting"
>;

export type UserDataScreenRouteProp = StackNavigationProp<
  RootStackParamList,
  "UserData"
>;

export type MainScreenRouteProp = StackNavigationProp<
  RootStackParamList,
  "Main"
>;

export const routes: Routes = [
  {
    name: "Greeting",
    component: Greeting
  },
  {
    name: "UserData",
    component: UserData
  },
  {
    name: "Main",
    component: Main
  }
];
