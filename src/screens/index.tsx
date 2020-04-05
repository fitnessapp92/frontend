import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Greeting from "./Greeting";
import UserData from "./UserData";
import Main from "./Main";

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator initialRouteName="Greeting" headerMode="none">
      <Stack.Screen name="Greeting" component={Greeting} />
      <Stack.Screen name="UserData" component={UserData} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}
