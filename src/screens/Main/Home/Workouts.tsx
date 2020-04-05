import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import { Text, Card, ListItem } from "react-native-elements";

const { height } = Dimensions.get("window");

export default function Main({ navigation }) {
  // onPress={() => navigation.navigate("Main")}
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Card
          key="ABS"
          title="ABS"
          containerStyle={styles.row}
          titleStyle={styles.titleStyle}
          dividerStyle={styles.divider}
        >
          <ListItem
            key="beginner"
            title="ABS BEGINNER"
            subtitle={"maybe there will be some text"}
            containerStyle={styles.item}
            onPress={() => navigation.navigate("Workout")}
          />
          <ListItem
            key="intermediate"
            title="ABS INTERMEDIATE"
            subtitle={"maybe there will be some text"}
            containerStyle={styles.item}
            onPress={() => navigation.navigate("Workout")}
          />
          <ListItem
            key="advanced"
            title="ABS ADVANCED"
            subtitle={"maybe there will be some text"}
            containerStyle={styles.item}
            onPress={() => navigation.navigate("Workout")}
          />
        </Card>
        <Card
          title="BUTT"
          containerStyle={styles.row}
          titleStyle={styles.titleStyle}
          dividerStyle={styles.divider}
        >
          <ListItem
            key="beginner"
            title="BUTT BEGINNER"
            subtitle={"maybe there will be some text"}
            containerStyle={styles.item}
            onPress={() => navigation.navigate("Workout")}
          />
          <ListItem
            key="intermediate"
            title="BUTT INTERMEDIATE"
            subtitle={"maybe there will be some text"}
            containerStyle={styles.item}
            onPress={() => navigation.navigate("Workout")}
          />
          <ListItem
            key="advanced"
            title="BUTT ADVANCED"
            subtitle={"maybe there will be some text"}
            containerStyle={styles.item}
            onPress={() => navigation.navigate("Workout")}
          />
        </Card>
        <Card
          title="LEGS"
          containerStyle={styles.row}
          titleStyle={styles.titleStyle}
          dividerStyle={styles.divider}
        >
          <ListItem
            key="beginner"
            title="LEGS BEGINNER"
            subtitle={"maybe there will be some text"}
            containerStyle={styles.item}
            onPress={() => navigation.navigate("Workout")}
          />
          <ListItem
            key="intermediate"
            title="LEGS INTERMEDIATE"
            subtitle={"maybe there will be some text"}
            containerStyle={styles.item}
            onPress={() => navigation.navigate("Workout")}
          />
          <ListItem
            key="advanced"
            title="LEGS ADVANCED"
            subtitle={"maybe there will be some text"}
            containerStyle={styles.item}
            onPress={() => navigation.navigate("Workout")}
          />
        </Card>
      </ScrollView>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  someText: {
    marginTop: 50,
  },
  row: {
    // borderWidth: 4,
    // borderColor: "red",
    width: "95%",
    margin: 0,
  },
  divider: {
    width: "100%",
  },
  rowTitle: {},
  item: {
    backgroundColor: "#2089dc",
    marginBottom: 10,
    borderRadius: 20,
  },
  titleStyle: {
    textAlign: "left",
  },
  scroll: {
    flexDirection: "column",
    width: "100%",
  },
  contentContainerStyle: {
    // justifyContent: "center",
    alignItems: "center",
  },
});
