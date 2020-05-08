import React, { useRef, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  Animated,
  Easing
} from "react-native";
import { Text, ListItem, Icon, useTheme, Button } from "@ui-kitten/components";
import ProgressCircle from "react-native-progress-circle";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const Workout = ({ navigation }) => {
  const theme = useTheme();
  const borderColor = theme["color-primary-300"];
  const window = useWindowDimensions();

  const navigateBtn = theme["color-primary-600"];
  // add more complex calculations for timer
  return (
    <View style={styles.container}>
      <View style={[styles.timer]}>
        <AnimatedCircularProgress
          rotation={0}
          size={window.width - 30}
          width={8}
          fill={100}
          easing={Easing.out(Easing.linear)}
          duration={30000}
          tintColor={theme["color-primary-600"]}
          backgroundColor={theme["color-basic-transparent-100"]}
        >
          {(sec) => {
            return (
              <>
                <Image
                  source={require("assets/images/workouts/1.gif")}
                  style={styles.image}
                />
                <Text category="p1" style={styles.timerText}>
                  {Math.floor(sec)}
                </Text>
              </>
            );
          }}
        </AnimatedCircularProgress>
      </View>
      <Text category="h4" style={styles.exerciseText}>
        High Stepping
      </Text>
      <View style={styles.footer}>
        <Button appearance="outline" style={[styles.btn, styles.prev]}>
          {() => (
            <MaterialIcons
              name="navigate-before"
              size={24}
              color={navigateBtn}
            />
          )}
        </Button>
        <Button
          accessoryLeft={() => (
            <FontAwesome5
              name="stop"
              size={18}
              color={theme["color-basic-100"]}
            />
          )}
          style={[styles.btn, styles.pause]}
        >
          {"Pause"}
        </Button>
        <Button appearance="outline" style={[styles.btn, styles.next]}>
          {() => (
            <MaterialIcons name="navigate-next" size={24} color={navigateBtn} />
          )}
        </Button>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  timer: {
    marginTop: 40
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center"
  },
  image: {
    resizeMode: "contain",
    width: "85%",
    height: "85%"
  },
  exerciseText: {
    marginTop: 20,
    color: "#000"
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30
  },
  btn: {
    width: 54,
    height: 54,
    borderRadius: 27
  },
  prev: {},
  pause: {
    width: 140,
    height: 54,
    borderRadius: 27,
    marginLeft: 20,
    marginRight: 20
  },
  next: {},
  timerText: {
    color: "#000"
  }
});

export default Workout;
