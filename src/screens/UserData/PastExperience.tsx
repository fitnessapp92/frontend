import React, { useState } from "react";
import { View } from "react-native";
import { Slider } from "react-native-elements";
import { Text, Button, Input, useTheme } from "@ui-kitten/components";

import withWrapper from "./withWrapper";

import { styles } from "styles/screens/UserData/PastExperience";

type WeekValues = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

type WeekDay = {
  title: string;
  value: WeekValues;
};

const WEEK_DAYS: WeekDay[] = [
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

const PastExperience: React.FC = () => {
  const theme = useTheme();

  const [value, setValue] = useState(0.3);
  const [weeks, setWeeks] = useState<WeekValues[]>(["mon", "wed", "fri"]);

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
        {WEEK_DAYS.map((week) => {
          let btnStyle: {
            borderWidth: number;
            backgroundColor?: string;
          } = { borderWidth: 0 };

          if (weeks.includes(week.value)) {
            btnStyle.backgroundColor = theme["inactive-button-background"];
          }

          return (
            <Button
              key={week.value}
              style={[styles.day, btnStyle]}
              onPress={() =>
                setWeeks(
                  weeks.includes(week.value)
                    ? weeks.filter((v) => v !== week.value)
                    : [...weeks, week.value]
                )
              }
            >
              {() => <Text category="h6">{week.title}</Text>}
            </Button>
          );
        })}
      </View>
    </View>
  );
};

export default withWrapper(PastExperience, {
  header: "How often do you exercise?",
  nextRouteName: "Main",
  bgSource: require("assets/images/UserData/PastExperience.jpg")
});
