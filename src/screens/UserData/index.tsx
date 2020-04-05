import React from "react";

import {
  TransitionSpecs,
  HeaderStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack";

import PhysicalParameters from "./PhysicalParameters";
import Goal from "./Goal";
import PastExperience from "./PastExperience";

const Stack = createStackNavigator();

export default function UserData() {
  return (
    <Stack.Navigator initialRouteName="Gender" headerMode="none">
      <Stack.Screen name="Gender" component={PhysicalParameters} />
      <Stack.Screen name="Goal" component={Goal} />
      <Stack.Screen name="PastExperience" component={PastExperience} />
    </Stack.Navigator>
  );
}
