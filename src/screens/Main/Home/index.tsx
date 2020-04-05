import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Workouts from "./Workouts";
import Workout from "./Workout";

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator initialRouteName="Workouts">
      <Stack.Screen name="Workouts" component={Workouts} />
      <Stack.Screen name="Workout" component={Workout} />
    </Stack.Navigator>
  );
}
