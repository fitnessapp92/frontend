import React, { useState } from "react";
import { View } from "react-native";
import { Slider } from "react-native-elements";
import { Text, Button, Input, useTheme } from "@ui-kitten/components";

import withWrapper from "./withWrapper";

import { styles } from "styles/screens/UserData/PastExperience";

const WEEK_DAYS = [
  {
    title: "Mon",
    value: "mon"
  },
  {
    title: "Tue",
    value: "tue"
  },
  {
    title: "Wed",
    value: "wed"
  },
  {
    title: "Thu",
    value: "thu"
  },
  {
    title: "Fri",
    value: "fri"
  },
  {
    title: "Sat",
    value: "sat"
  },
  {
    title: "Sun",
    value: "sun"
  }
];

const PastExperience = ({ navigation }) => {
  const theme = useTheme();

  const [value, setValue] = useState(0.3);
  const [weeks, setWeeks] = useState(["mon", "wed", "fri"]);

  console.log("value", value);

  const thumbStyle = {
    borderRadius: 20,
    width: 40,
    height: 40
  };

  const thumbTouchSize = {
    width: 50,
    height: 50
  };

  const thumbTintColor = theme["color-primary-500"];

  const minimumTrackTintColor = theme["color-basic-transparent-900"];
  const maximumTrackTintColor = theme["color-primary-transparent-300"];

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Slider
          thumbStyle={thumbStyle}
          thumbTouchSize={thumbTouchSize}
          thumbTintColor={thumbTintColor}
          minimumTrackTintColor={minimumTrackTintColor}
          maximumTrackTintColor={maximumTrackTintColor}
          value={value}
          onValueChange={(value) => setValue(value)}
        />
      </View>
      <View style={styles.sliderTextContainer}>
        <View style={styles.sliderText}>
          <Text>a little</Text>
        </View>
        <View style={styles.sliderText}>
          <Text>a lot</Text>
        </View>
      </View>
      <View style={styles.exerciseTime}>
        <Text category="h1">Exercise time</Text>
      </View>
      <View style={styles.week}>
        {WEEK_DAYS.map(({ title, value }) => (
          <Button
            key={value}
            size="small"
            style={styles.day}
            disabled={!weeks.includes(value)}
            onPress={() =>
              setWeeks(
                weeks.includes(value)
                  ? weeks.filter((v) => v !== value)
                  : [...weeks, value]
              )
            }
          >
            {title}
          </Button>
        ))}
      </View>
    </View>
  );
};

export default withWrapper(PastExperience, {
  header: "How often do you exercise?",
  nextComponent: "Main",
  bgSource: require("assets/images/UserData/PastExperience.jpg")
});
