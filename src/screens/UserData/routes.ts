import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import PhysicalParameters from "./PhysicalParameters";
import Goal from "./Goal";
import PastExperience from "./PastExperience";

type typeRouteNames = "PhysicalParameters" | "Goal" | "PastExperience";

type Routes = {
  name: typeRouteNames;
  component: React.ComponentType<any>;
}[];

export type RootStackParamList = Record<typeRouteNames, undefined>;

export type PhysicalParametersScreenRouteProp = StackNavigationProp<
  RootStackParamList,
  "PhysicalParameters"
>;

export type GoalScreenRouteProp = StackNavigationProp<
  RootStackParamList,
  "Goal"
>;

export type PastExperienceScreenRouteProp = StackNavigationProp<
  RootStackParamList,
  "PastExperience"
>;

export const routes: Routes = [
  {
    name: "PhysicalParameters",
    component: PhysicalParameters
  },
  {
    name: "Goal",
    component: Goal
  },
  {
    name: "PastExperience",
    component: PastExperience
  }
];
