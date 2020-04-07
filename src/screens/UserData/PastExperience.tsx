import React, { useState } from "react";
import { View } from "react-native";
import { Text, Button, Slider } from "react-native-elements";

import withWrapper from "./withWrapper";

import { styles } from "styles/screens/UserData/PastExperience";

const WEEK_DAYS = [
  {
    title: "Mon",
    value: "mon",
  },
  {
    title: "Tue",
    value: "tue",
  },
  {
    title: "Wed",
    value: "wed",
  },
  {
    title: "Thu",
    value: "thu",
  },
  {
    title: "Fri",
    value: "fri",
  },
  {
    title: "Sat",
    value: "sat",
  },
  {
    title: "Sun",
    value: "sun",
  },
];

const PastExperience = ({ navigation }) => {
  const [value, setValue] = useState(30);
  const [weeks, setWeeks] = useState(["mon", "wed", "fri"]);

  return (
    <>
      <View style={styles.slider}>
        <Slider value={value} onValueChange={(value) => setValue(value)} />
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

      <View style={styles.nextBtn}>
        <Button title="Next" onPress={() => navigation.navigate("Main")} />
      </View>
    </>
  );
};

export default withWrapper(PastExperience, {
  header: "How much have you exercised int the past?",
  bg: require("assets/images/UserData/PastExperience.jpg"),
});
