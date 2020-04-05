import React, { useState } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { Text, Button, Slider } from "react-native-elements";

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

export default function PastExperience({ navigation }) {
  const [value, setValue] = useState(30);
  const [weeks, setWeeks] = useState(["mon", "wed", "fri"]);
  console.log("weeks", weeks);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("assets/images/UserData/PastExperience.jpg")}
        style={styles.bgImage}
      >
        <View style={styles.experienceText}>
          <Text h2>How much have you exercised int the past?</Text>
        </View>

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
      </ImageBackground>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  experienceText: {
    marginTop: 100,
    width: "90%",
  },

  slider: {
    width: "80%",
    marginTop: 30,
  },
  sliderTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "green",
    width: "80%",
  },
  exerciseTime: {
    width: "90%",
    marginTop: 30,
  },
  week: {
    flexDirection: "row",
    justifyContent: "space-around",

    width: "90%",
    marginBottom: 10,
  },
  sliderText: {},
  nextBtn: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  day: {
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 20,
    width: 44,
    height: 44,
  },
  dayTitle: {
    marginTop: -5,
  },
});
