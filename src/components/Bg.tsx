import React from "react";
import { ImageBackground, View, Animated } from "react-native";

import { styles } from "styles/components/Bg";

export function Bg({ image }) {
  return (
    <Animated.View styles={styles.bgMedia}>
      <ImageBackground style={styles.bgImage} source={image} />
    </Animated.View>
  );
}
