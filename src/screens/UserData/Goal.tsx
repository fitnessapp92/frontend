import React from "react";
import { View } from "react-native";
import { Text, ListItem, Icon, useTheme } from "@ui-kitten/components";

import { styles } from "styles/screens/UserData/Goal";

import withWrapper from "./withWrapper";

import { GoalScreenRouteProp } from "./routes";

type Props = {
  navigation: GoalScreenRouteProp;
};

const GOALS = [
  {
    title: "LOSE WEIGHT",
    value: "lose_weight",
    subtitle: "You will be stronger",
    icon: "twitter"
  },
  {
    title: "GET WEIGHT",
    value: "get_weight",
    subtitle: "You will be stronger",
    icon: "shield-off"
  },
  {
    title: "GET TONNED",
    value: "get_tonned",
    subtitle: "You will be stronger",
    icon: "paper-plane"
  },
  {
    title: "BUILD MUSCLE",
    value: "build_muscle",
    subtitle: "You will be stronger",
    icon: "settings-2"
  }
];

const Goal: React.FC<Props> = ({ navigation }) => {
  const theme = useTheme();
  const borderColor = theme["color-primary-300"];

  return (
    <View style={styles.goals}>
      {GOALS.map((goal) => {
        return (
          <ListItem
            key={goal.value}
            style={{ ...styles.goal, borderColor }}
            title={() => <Text category="h6">{goal.title}</Text>}
            description={goal.subtitle}
            accessoryLeft={(props) => (
              <Icon style={styles.buttonIconNext} {...props} name={goal.icon} />
            )}
            onPress={() => navigation.navigate("PastExperience")}
          />
        );
      })}
    </View>
  );
};

export default withWrapper(Goal, {
  header: "What's you goal?",
  bgSource: require("assets/images/UserData/Goal.jpg")
});
