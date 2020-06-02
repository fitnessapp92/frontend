import React from "react";
import { View, ImageBackground, ImagePropsBase } from "react-native";
import { Text, Layout, Button, Icon } from "@ui-kitten/components";

import { typeRouteNames } from "./routes";

import { styles } from "styles/screens/UserData/withWrapper";

const NextIcon = (props) => (
  <Icon style={styles.buttonIconNext} {...props} name="arrow-forward-outline" />
);

type WithWrapper = <P>(
  component: React.ComponentType<P>,
  data: {
    header: string;
    bgSource?: ImagePropsBase;
    nextRouteName?: typeRouteNames;
  }
) => (props: P) => JSX.Element;

const withWrapper: WithWrapper = (
  WrappedComponent,
  { header, bgSource, nextRouteName }
) => {
  return (props) => {
    let content = (
      <>
        <View style={styles.header}>
          <Text category="h1" style={styles.headerText}>
            {header}
          </Text>
        </View>
        <WrappedComponent {...props} />
        {nextRouteName && (
          <View style={styles.nextBtnWrapper}>
            <Button
              appearance="outline"
              size="giant"
              accessoryRight={NextIcon}
              onPress={() => props.navigation.navigate(nextRouteName)}
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

type PropsAreEqual<P> = (
  prevProps: Readonly<P>,
  nextProps: Readonly<P>
) => boolean;

const withSampleHoC = <P extends {}>(
  component: {
    (props: P): Exclude<React.ReactNode, undefined>;
    displayName?: string;
  },
  memo?: PropsAreEqual<P> | false,

  componentName = component.displayName ?? component.name
): {
  (props: P): JSX.Element;
} => {
  function WithSampleHoc(props: P) {
    //Do something special to justify the HoC.
    return component(props) as JSX.Element;
  }

  WithSampleHoc.displayName = `withSampleHoC(${componentName})`;

  let wrappedComponent =
    memo === false ? WithSampleHoc : React.memo(WithSampleHoc, propsAreEqual);

  //copyStaticProperties(component, wrappedComponent);

  return wrappedComponent as typeof WithSampleHoc;
};
