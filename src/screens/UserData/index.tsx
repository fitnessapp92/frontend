import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { routes, RootStackParamList } from "./routes";

const Stack = createStackNavigator<RootStackParamList>();

const UserData: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="PhysicalParameters" headerMode="none">
      {routes.map(({ name, component }) => (
        <Stack.Screen name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
};

export default UserData;
