import React, { useState, useRef, useEffect } from "react";
import { View, Image, Animated } from "react-native";
import { Text, Button, Input, useTheme } from "@ui-kitten/components";
import { Madoka } from "components/Input";
import AccessoryRight from "./AccessoryRight";

import withWrapper from "../withWrapper";

import { styles } from "styles/screens/UserData/PhysicalParameters";

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

  const genderBtnStyles = (type) => [
    styles.genderBtn,
    gender === type && styles.genderrActiveBtn
  ];

  const genderTextStyles = (type) => [
    { color: theme["color-primary-100"] },
    gender === type && styles.genderActiveText
  ];

  const AccessoryWeight = (
    <AccessoryRight
      units={[
        { title: "kg", value: "kg" },
        { title: "lbs", value: "lbs" }
      ]}
      value="kg"
    />
  );

  const AccessoryHeight = (
    <AccessoryRight
      units={[
        { title: "in", value: "in" },
        { title: "cm", value: "cm" }
      ]}
      value="cm"
    />
  );

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
            style={genderBtnStyles("male")}
            onPress={() => setGender("male")}
          >
            {() => (
              <Text category="h6" style={genderTextStyles("male")}>
                MALE
              </Text>
            )}
          </Button>
          <Button
            style={genderBtnStyles("female")}
            onPress={() => setGender("female")}
          >
            {() => (
              <Text category="h6" style={genderTextStyles("female")}>
                FEMALE
              </Text>
            )}
          </Button>
        </View>
        <View style={styles.sizes}>
          <View style={[styles.size, styles.weight]}>
            <Madoka
              label={"Weight"}
              borderColor={theme["color-primary-500"]}
              labelHeight={28}
              keyboardType="numeric"
              accessoryRight={AccessoryWeight}
              labelStyle={{ color: "#EBEBEB" }}
              inputStyle={{ color: "#fff" }}
            />
          </View>
          <View style={[styles.size, styles.height]}>
            <Madoka
              label={"Height"}
              borderColor={theme["color-primary-500"]}
              labelHeight={28}
              keyboardType="numeric"
              accessoryRight={AccessoryHeight}
              labelStyle={{ color: "#EBEBEB" }}
              inputStyle={{ color: "#fff" }}
            />
          </View>
        </View>
        <View style={styles.age}>
          <View style={[styles.size]}>
            <Madoka
              label={"Age"}
              borderColor={theme["color-primary-500"]}
              labelHeight={28}
              keyboardType="numeric"
              labelStyle={{ color: "#EBEBEB" }}
              inputStyle={{ color: "#fff" }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default withWrapper(PhysicalParameters, {
  header: "WHAT'S YOUR GENDER?",
  nextComponent: "Goal"
  // bgSource: require("assets/images/UserData/PhysicalParameters.jpg"),
});
