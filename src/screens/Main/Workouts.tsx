import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView
} from "react-native";
// import { ListItem } from "react-native-elements";
import {
  Text,
  Card,
  List,
  ListItem,
  Divider,
  Icon,
  Layout,
  Button,
  useTheme
} from "@ui-kitten/components";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const exercises = [
  {
    id: "high_stepping",
    title: "High Stepping",
    description: "maybe there will be some text",
    image: require("assets/images/workouts/1.gif")
  },
  {
    id: "butt_kicks",
    title: "Butt Kicks",
    description: "maybe there will be some text",
    image: require("assets/images/workouts/2.gif")
  },
  {
    id: "squats",
    title: "Squats",
    description: "maybe there will be some text",
    image: require("assets/images/workouts/3.gif")
  },
  {
    id: "high_stepping1",
    title: "High Stepping",
    description: "maybe there will be some text",
    image: require("assets/images/workouts/4.gif")
  },
  {
    id: "butt_kicks1",
    title: "Butt Kicks",
    description: "maybe there will be some text",
    image: require("assets/images/workouts/1.gif")
  },
  {
    id: "squats1",
    title: "Squats",
    description: "maybe there will be some text",
    image: require("assets/images/workouts/2.gif")
  },
  {
    id: "high_stepping2",
    title: "High Stepping",
    description: "maybe there will be some text",
    image: require("assets/images/workouts/3.gif")
  },
  {
    id: "butt_kicks2",
    title: "Butt Kicks",
    description: "maybe there will be some text",
    image: require("assets/images/workouts/4.gif")
  },
  {
    id: "squats2",
    title: "Squats",
    description: "maybe there will be some text",
    image: require("assets/images/workouts/1.gif")
  },
  {
    id: "high_stepping3",
    title: "High Stepping",
    description: "maybe there will be some text",
    image: require("assets/images/workouts/2.gif")
  },
  {
    id: "butt_kicks3",
    title: "Butt Kicks",
    description: "maybe there will be some text",
    image: require("assets/images/workouts/3.gif")
  },
  {
    id: "squats3",
    title: "Squats",
    description: "maybe there will be some text",
    image: require("assets/images/workouts/4.gif")
  },
  {
    id: "high_stepping4",
    title: "High Stepping",
    description: "maybe there will be some text",
    image: require("assets/images/workouts/2.gif")
  },
  {
    id: "butt_kicks4",
    title: "Butt Kicks",
    description: "maybe there will be some text",
    image: require("assets/images/workouts/3.gif")
  },
  {
    id: "squats4",
    title: "Squats",
    description: "maybe there will be some text",
    image: require("assets/images/workouts/4.gif")
  }
];

const ItemHeader = ({ title }) => {
  const theme = useTheme();

  const color = theme["color-basic-600"];

  return (
    <Text category="h5" style={[styles.itemText, { color }]}>
      {title}
    </Text>
  );
};

const ItemDescription = ({ title }) => {
  const theme = useTheme();
  const color = theme["color-basic-300"];

  return (
    <Text category="s1" style={[styles.itemDescription, { color }]}>
      {title}
    </Text>
  );
};

// assets/images/workouts

export default function Workout({ navigation }) {
  const renderItem = ({ item, index }) => (
    <ListItem
      key={item.id}
      title={() => <ItemHeader title={item.title} />}
      description={() => <ItemDescription title={item.description} />}
      accessoryRight={() => <Image style={styles.image} source={item.image} />}
      style={styles.item}
    />
  );

  const theme = useTheme();
  const backgroundColor = theme["color-basic-200"];

  return (
    <>
      <List
        // style={styles.container}
        data={exercises}
        ItemSeparatorComponent={() => (
          <Divider style={[styles.divider, { backgroundColor }]} />
        )}
        renderItem={renderItem}
      />
      <View style={styles.startBtnWrapper}>
        <Button
          // appearance="outline"
          size="giant"
          accessoryRight={(props) => (
            <Icon
              style={styles.buttonIconNext}
              {...props}
              name="arrow-forward-outline"
            />
          )}
          onPress={() => navigation.navigate("Workout")}
        >
          NEXT
        </Button>
      </View>
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  scroll: {
    flexDirection: "column",
    width: "100%"
  },
  contentContainerStyle: {
    // justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  item: {
    backgroundColor: "#fff",
    width: "100%",
    height: 70
  },
  divider: {},
  itemText: {},
  itemDescription: {},
  image: {
    resizeMode: "contain",
    width: 50,
    height: 50,
    marginLeft: 10
  },
  startBtnWrapper: {
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    width: 200,
    bottom: 30
  }
});
