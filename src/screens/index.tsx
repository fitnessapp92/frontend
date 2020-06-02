import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { routes, RootStackParamList } from "./routes";

const Stack = createStackNavigator<RootStackParamList>();

const Screens: React.FC = () => (
  <Stack.Navigator initialRouteName="Greeting" headerMode="none">
    {routes.map(({ name, component }) => (
      <Stack.Screen key={name} name={name} component={component} />
    ))}
  </Stack.Navigator>
);

export default Screens;
