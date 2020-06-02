import React, { useRef, useEffect } from "react";
import { Text, View, ImageBackground, Animated, Easing } from "react-native";

import { styles } from "styles/screens/Greeting";

import { GreetingScreenRouteProp } from "src/screens/routes";

type Props = {
  navigation: GreetingScreenRouteProp;
};

const Greeting: React.FC<Props> = ({ navigation }) => {
  const firstTextAnimatedValue = useRef(new Animated.Value(0)).current;
  const lineAnimatedWidth = useRef(new Animated.Value(0)).current;
  const secondTextAnimatedHeight = useRef(new Animated.Value(0)).current;
  const bgAnimatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("UserData");
      // 6000
    }, 0);
  }, []);

  useEffect(() => {
    const textAnimations = Animated.sequence([
      Animated.timing(firstTextAnimatedValue, {
        toValue: 100,
        duration: 2000,
        delay: 500,
        easing: Easing.bounce
      }),
      Animated.timing(lineAnimatedWidth, {
        toValue: 100,
        duration: 1000
        // delay: 800,
        // easing: Easing.elastic
      }),
      Animated.timing(secondTextAnimatedHeight, {
        toValue: 100,
        duration: 1000
        // easing: Easing.bounce
      })
    ]);

    const bgAnimation = [
      Animated.timing(bgAnimatedScale, {
        toValue: 100,
        duration: 25000
      })
    ];

    Animated.parallel([textAnimations, ...bgAnimation]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.bgMedia,
          {
            transform: [
              {
                scale: bgAnimatedScale.interpolate({
                  inputRange: [0, 100],
                  outputRange: [1, 1.3]
                })
              }
            ]
          }
        ]}
      >
        <ImageBackground
          style={styles.bgImage}
          source={require("assets/images/Greeting/greeting1.jpg")}
        />
      </Animated.View>
      <View style={styles.content}>
        <Animated.View
          style={[
            styles.appTitle,
            {
              transform: [
                {
                  translateY: firstTextAnimatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [-600, 0]
                  })
                }
              ]
            }
          ]}
        >
          <Text style={styles.text}>FITNESS APP</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.line,
            {
              width: lineAnimatedWidth.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"]
              })
            }
          ]}
        />
        <View style={[styles.slogan]}>
          <Animated.View
            style={{
              height: secondTextAnimatedHeight.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "25%"]
              })
            }}
          >
            <Text style={styles.sloganText}>
              There will be our slogan or smth else
            </Text>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Greeting;
