import React from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";

import { styles } from "styles/screens/UserData/Goal";

import withWrapper from "./withWrapper";

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

const Goal = ({ navigation }) => {
  return (
    <View style={styles.goals}>
      {GOALS.map((goal) => {
        return (
          <View key={goal.value} style={styles.goal}>
            <ListItem
              title={goal.title}
              subtitle={goal.subtitle}
              onPress={() => navigation.navigate("PastExperience")}
            />
          </View>
        );
      })}
    </View>
  );
};

export default withWrapper(Goal, {
  header: "What's you goal?",
  bgSource: require("assets/images/UserData/Goal.jpg")
});
