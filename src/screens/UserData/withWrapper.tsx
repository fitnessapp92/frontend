import React from "react";
import { View, ImageBackground, ImagePropsBase } from "react-native";
import { Text, Layout, Button, Icon } from "@ui-kitten/components";

import { styles } from "styles/screens/UserData/withWrapper";

// ! TEMP
type Props = {
  header: string;
  bgSource?: ImagePropsBase;
  nextComponent?: string;
};

const NextIcon = (props) => (
  <Icon style={styles.buttonIconNext} {...props} name="arrow-forward-outline" />
);

const withWrapper = (
  WrappedComponent,
  { header, bgSource, nextComponent }: Props
) => {
  return (props) => {
    console.log("props", props);
    let content = (
      <>
        <View style={styles.header}>
          <Text category="h1" style={styles.headerText}>
            {header}
          </Text>
        </View>
        <WrappedComponent {...props} />
        {nextComponent && (
          <View style={styles.nextBtnWrapper}>
            <Button
              appearance="outline"
              size="giant"
              accessoryRight={NextIcon}
              onPress={() => props.navigation.navigate(nextComponent)}
            >
              NEXT
            </Button>
          </View>
        )}
      </>
    );

    let bg = null;
    if (bgSource) {
      bg = <ImageBackground source={bgSource} style={styles.bgImage} />;
    }

    return (
      <>
        {bg}
        <View style={styles.bgColor} />
        <View style={styles.content}>{content}</View>
      </>
    );
  };
};

export default withWrapper;
