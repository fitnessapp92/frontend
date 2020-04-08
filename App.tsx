import React, { Fragment, useState, useEffect } from "react";
import { Text } from "react-native"
import { ThemeProvider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from '@use-expo/font';

// ! SRC - temp name
import SRC from "src/screens";

const theme = {
  Text: {
    h1Style: {
      color: "#fff", 
      textAlign: "center",
      // fontFamily: "MontserratItalic",
      fontSize: 38,
    },
    h2Style: {
      color: "#fff",
      textAlign: "center",
      // fontFamily: "MontserratItalic",
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
  // let [fontsLoaded] = useFonts({
  //   'Montserrat': require('assets/fonts/monteserat/Montserrat-Black.ttf'),
  //   'MontserratItalic': require('assets/fonts/monteserat/Montserrat-ThinItalic.ttf'),
  // });



  // // ! TEMP
  // if (!fontsLoaded) {
  //   return null;
  // }

 
  // console.log("fontsLoaded", fontsLoaded)

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SRC />
      </NavigationContainer>
    </ThemeProvider>
  );
}
