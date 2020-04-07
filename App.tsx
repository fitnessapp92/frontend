import React, { Fragment, useState, useEffect } from "react";
import { ThemeProvider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";

// ! SRC - temp name
import SRC from "src/screens";

const theme = {
  Text: {
    h1Style: {
      color: "#fff",
      textAlign: "center",
      fontSize: 38,
    },
    h2Style: {
      color: "#fff",
      textAlign: "center",
    },
  },
  Button: {
    buttonStyle: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 15,
      paddingBottom: 15,
    },
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SRC />
      </NavigationContainer>
    </ThemeProvider>
  );
}
