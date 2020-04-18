import React, { Fragment, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "@use-expo/font";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Layout
} from "@ui-kitten/components";
import { default as theme } from "./theme.json";
import { default as customMapping } from "./custom-mapping.json";

// ! SRC - temp name
import SRC from "src/screens";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Overpass-SemiBold": require("./src/assets/fonts/overpass/Overpass-SemiBold.ttf"),
    "Overpass-Bold": require("./src/assets/fonts/overpass/Overpass-Bold.ttf"),
    test: require("./src/assets/fonts/overpass/Overpass-ThinItalic.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        customMapping={customMapping}
        theme={{ ...eva.dark, ...theme }}
      >
        <NavigationContainer>
          <SRC />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}
