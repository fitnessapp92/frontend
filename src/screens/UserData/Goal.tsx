import React from "react";
import { ImageBackground, View } from "react-native";
import { Text, ListItem } from "react-native-elements";

import { styles } from "styles/screens/UserData/Goal";

const GOALS = [
  {
    title: "Lose weight",
    value: "lose_weight",
    subtitle: "You will be stronger"
  },
  {
    title: "Get weight",
    value: "get_weight",
    subtitle: "You will be stronger"
  },
  {
    title: "Get muscle",
    value: "get_muscle",
    subtitle: "You will be stronger"
  }
];

export default function Goal({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("assets/images/UserData/Goal.jpg")}
        style={styles.bgImage}
      >
        <View style={styles.goalText}>
          <Text h2>What's you goal?</Text>
        </View>

        <View style={styles.goals}>
          {GOALS.map(goal => {
            return (
              <View key={goal.value} style={styles.goal}>
                <ListItem
                  title={goal.title}
                  subtitle={goal.subtitle}
                  containerStyle={styles.goal}
                  onPress={() => navigation.navigate("PastExperience")}
                />
              </View>
            );
          })}
        </View>
      </ImageBackground>
    </View>
  );
}
