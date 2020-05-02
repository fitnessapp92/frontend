import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight
} from "react-native";
import {
  Text,
  Card,
  ListItem,
  Icon,
  Layout,
  useTheme
} from "@ui-kitten/components";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faBolt } from "@fortawesome/free-solid-svg-icons";

const { height } = Dimensions.get("window");

const Header = ({ title }) => {
  const textStyles = [
    styles.cardText,
    {
      color: "#000"
    }
  ];

  return (
    <Text category="h4" style={textStyles}>
      {title}
    </Text>
  );
};

export default function Main({ navigation }) {
  const theme = useTheme();
  // onPress={() => navigation.navigate("Main")}

  const containerStyle = {
    backgroundColor: "#fff"
    // backgroundColor: theme["color-basic-transparent-100"]
  };

  const cardStyles = [
    styles.card,
    {
      backgroundColor: "#fff"
      // backgroundColor: theme["color-basic-transparent-100"]
    }
  ];

  const cardBgColor = [
    styles.cardBgColor,
    {
      backgroundColor: theme["color-basic-transparent-700"]
    }
  ];

  const image = require("assets/images/Main/8164e325b34a91517543e7519653ec2b.jpg");

  const cardImage = require("assets/images/Main/Workouts/workout-example.jpg");

  return (
    <View style={[styles.container, containerStyle]}>
      {/* <ImageBackground source={image} style={styles.image}> */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Card
          key="ABS"
          header={() => <Header title="ABS" />}
          style={cardStyles}
        >
          {[1, 2, 3].map((v) => (
            <TouchableHighlight
              key={v}
              activeOpacity={0.1}
              underlayColor="#fff"
              onPress={() => navigation.navigate("Workout")}
            >
              <ImageBackground source={cardImage} style={styles.cardImage}>
                <View style={cardBgColor}>
                  <View style={styles.itemText}>
                    <Text category="h4">ABS intermediate</Text>
                    <Text>Text which will describe title</Text>
                  </View>

                  <View style={styles.cardFooterContainer}>
                    <View style={styles.time}>
                      <Icon
                        fill="#fff"
                        style={styles.cardIcon}
                        name="clock-outline"
                      />
                      <Text style={styles.timeText} category="p1">
                        10-15 min
                      </Text>
                    </View>
                    <View style={styles.effort}>
                      <Icon fill="#fff" style={styles.cardIcon} name="flash" />
                      <Icon fill="#fff" style={styles.cardIcon} name="flash" />
                      <Icon
                        fill="#fff"
                        style={styles.cardIcon}
                        name="flash-outline"
                      />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableHighlight>
          ))}
        </Card>
        <Card
          key="BUTT"
          header={() => <Header title="ABS" />}
          style={cardStyles}
        >
          {[1, 2, 3, 4, 5].map((v) => (
            <TouchableHighlight
              key={v}
              activeOpacity={0.1}
              underlayColor="#fff"
              onPress={() => navigation.navigate("Workout")}
            >
              <ImageBackground source={cardImage} style={styles.cardImage}>
                <View style={cardBgColor}>
                  <View style={styles.itemText}>
                    <Text category="h4">ABS intermediate</Text>
                    <Text>Text which will describe title</Text>
                  </View>

                  <View style={styles.cardFooterContainer}>
                    <View style={styles.time}>
                      <Icon
                        fill="#fff"
                        style={styles.cardIcon}
                        name="clock-outline"
                      />
                      <Text style={styles.timeText} category="p1">
                        10-15 min
                      </Text>
                    </View>
                    <View style={styles.effort}>
                      <Icon fill="#fff" style={styles.cardIcon} name="flash" />
                      <Icon fill="#fff" style={styles.cardIcon} name="flash" />
                      <Icon
                        fill="#fff"
                        style={styles.cardIcon}
                        name="flash-outline"
                      />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </TouchableHighlight>
          ))}
        </Card>
        {/* <Card
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
        </Card> */}
      </ScrollView>
      {/* </ImageBackground> */}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  contentContainerStyle: {
    // justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "rgba(0, 0, 0, 0.35)"
  },
  scroll: {
    flexDirection: "column",
    width: "100%"
  },
  card: {
    width: "95%",
    marginTop: 12,
    borderWidth: 0,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12
    // borderRadius: 5
    // borderColor: "red"
  },
  cardText: {
    marginLeft: 15,
    marginBottom: 4,
    marginTop: 4
  },
  listItem: {
    backgroundColor: "#2089dc",
    marginBottom: 10,
    borderRadius: 20
  },
  someText: {
    marginTop: 50
  },
  row: {
    // borderWidth: 4,
    // borderColor: "red",
    width: "95%",
    margin: 0
  },

  rowTitle: {},

  cardImage: {
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 20
  },

  cardBgColor: {
    height: 150,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingTop: 20
    // paddingBottom: 30
  },

  image: {
    // flex: 1,
    width: "100%",
    height: "100%",

    resizeMode: "stretch"
  },

  cardIcon: {
    width: 16,
    height: 16,
    marginRight: 6
  },

  itemText: {},

  cardFooterContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "flex-end",
    width: 100,
    marginBottom: 5
  },
  effort: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  timeText: {},
  time: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
