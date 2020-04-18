import React, { useState, useRef, useEffect } from "react";
import { View, Image, Animated } from "react-native";
import { Text, Button, Input, useTheme } from "@ui-kitten/components";
import { Madoka } from "components/Input";

import withWrapper from "./withWrapper";

import { styles } from "styles/screens/UserData/PhysicalParameters";

const Label = ({ text }) => {
  return <Text>{text}</Text>;
};

const PhysicalParameters = ({ navigation }) => {
  const imageAnimatedValue = useRef(new Animated.Value(0)).current;
  const [gender, setGender] = useState("female");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    Animated.timing(imageAnimatedValue, {
      toValue: gender === "male" ? 1 : 0,
      duration: 600
    }).start();
  }, [gender]);

  const theme = useTheme();

  console.log("theme", theme.color2);

  const inactiveBtn = {
    backgroundColor: "rgba(245, 212, 209, 0.3)",
    borderWidth: 0
  };

  const femaleClassNames = {
    btn:
      gender === "female"
        ? {
            backgroundColor: "rgba(245, 212, 209, 0.4)",
            borderWidth: 0
          }
        : {},
    text:
      gender === "female"
        ? {
            color: "#fff"
          }
        : {}
  };

  const maleClassNames = {
    btn:
      gender === "male"
        ? {
            backgroundColor: "rgba(245, 212, 209, 0.4)",
            borderWidth: 0
          }
        : {},
    text:
      gender === "male"
        ? {
            color: "#fff"
          }
        : {}
  };

  // ! bg should work via withWrapper hook
  // ! to think later how to implement it
  return (
    <>
      <View style={styles.bgColor} />
      <View style={styles.bgContainer}>
        <Animated.Image
          style={[
            styles.bgImage,
            styles.man,
            {
              right: imageAnimatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: ["100%", "0%"]
              })
            }
          ]}
          source={require("assets/images/UserData/PhysicalParameters/Man.jpg")}
        />

        <Animated.Image
          style={[
            styles.bgImage,
            styles.wooman,
            {
              left: imageAnimatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"]
              })
            }
          ]}
          source={require("assets/images/UserData/PhysicalParameters/WooMan.jpg")}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.genderButtons}>
          <Button
            style={[styles.genderBtn, maleClassNames.btn]}
            onPress={() => setGender("male")}
          >
            <Text
              category="h6"
              style={[
                { color: theme["color-primary-100"] },
                maleClassNames.text
              ]}
            >
              MALE
            </Text>
          </Button>
          <Button
            style={[styles.genderBtn, femaleClassNames.btn]}
            onPress={() => setGender("female")}
          >
            <Text
              category="h6"
              style={[
                { color: theme["color-primary-100"] },
                femaleClassNames.text
              ]}
            >
              FEMALE
            </Text>
          </Button>
        </View>
        <View style={styles.sizes}>
          <View style={[styles.size, styles.weight]}>
            <Madoka
              label={"Weight"}
              // this is used as active and passive border color
              borderColor={theme["color-primary-200"]}
              inputPadding={16}
              labelHeight={24}
              labelStyle={{ color: "#EBEBEB" }}
              inputStyle={{ color: "#fff" }}
            />
            {/* <Input
              style={styles.input}
              textStyle={styles.inputText}
              size="small"
              placeholderTextColor="#fff"
              label="Weight"
              placeholder="number"
              keyboardType="numeric"
              onEndEditing={({ nativeEvent: { text } }) => setWeight(text)}
            /> */}
          </View>
          <View style={[styles.size, styles.height]}>
            <Madoka
              label={"Height"}
              // this is used as active and passive border color
              borderColor={theme["color-primary-200"]}
              inputPadding={16}
              labelHeight={24}
              labelStyle={{ color: "#EBEBEB" }}
              inputStyle={{ color: "#fff" }}
            />
            {/* <Input
              style={styles.input}
              textStyle={styles.inputText}
              size="small"
              placeholderTextColor="#fff"
              label="Height"
              placeholder="number"
              keyboardType="numeric"
              onEndEditing={({ nativeEvent: { text } }) => setHeight(text)}
            /> */}
          </View>
        </View>
        <View style={styles.age}>
          <View style={[styles.size]}>
            <Madoka
              label={"Age"}
              // this is used as active and passive border color
              borderColor={theme["color-primary-200"]}
              inputPadding={16}
              labelHeight={24}
              labelStyle={{ color: "#EBEBEB" }}
              inputStyle={{ color: "#fff" }}
            />
            {/* <Input
            style={styles.input}
            textStyle={styles.inputText}
            size="small"
            placeholderTextColor="#fff"
            label="Age"
            placeholder="number"
            keyboardType="numeric"
            onEndEditing={({ nativeEvent: { text } }) => setAge(text)}
          /> */}
          </View>
        </View>
      </View>
    </>
  );
};

const Bg = () => {};

export default withWrapper(PhysicalParameters, {
  header: "WHAT'S YOUR GENDER?",
  nextComponent: "Goal"
  // bgSource: require("assets/images/UserData/PhysicalParameters.jpg"),
});
