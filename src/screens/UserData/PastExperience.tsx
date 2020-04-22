import React, { useState } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import Slider from "@react-native-community/slider";

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
  const [value, setValue] = useState(30);
  const [weeks, setWeeks] = useState(["mon", "wed", "fri"]);

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View>
      <View style={styles.sliderTextContainer}>
        <View style={styles.sliderText}>
          <Text h4>a little</Text>
        </View>
        <View style={styles.sliderText}>
          <Text h4>a lot</Text>
        </View>
      </View>
      <View style={styles.exerciseTime}>
        <Text h2>Exercise time</Text>
      </View>
      <View style={styles.week}>
        {WEEK_DAYS.map(({ title, value }) => (
          <Button
            key={value}
            title={title}
            buttonStyle={styles.day}
            titleStyle={styles.dayTitle}
            disabled={!weeks.includes(value)}
            onPress={() =>
              setWeeks(
                weeks.includes(value)
                  ? weeks.filter((v) => v !== value)
                  : [...weeks, value]
              )
            }
          />
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
