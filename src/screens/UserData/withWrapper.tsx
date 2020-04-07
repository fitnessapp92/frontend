import React from "react";
import { View, ImageBackground } from "react-native";
import { Text } from "react-native-elements";

import { styles } from "styles/components/withWrapper";

const withWrapper = (WrappedComponent, { header, bg }) => {
  return (props) => {
    return (
      <View style={styles.container}>
        <ImageBackground source={bg} style={styles.bg}>
          <View style={styles.header}>
            <Text h1>{header}</Text>
          </View>
          <WrappedComponent {...props} />
        </ImageBackground>
      </View>
    );
  };
};

export default withWrapper;
