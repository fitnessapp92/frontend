import React, { useState, useRef, useEffect } from "react";
import { View, Image, Animated } from "react-native";
import { Text, Button, Input, useTheme } from "@ui-kitten/components";
import { Madoka } from "components/Input";
import { capitalizeFirstLetter } from "utils/string";
import AccessoryRight from "./AccessoryRight";

import { useStyles } from "./useStyles";

import withWrapper from "../withWrapper";

import { styles } from "styles/screens/UserData/PhysicalParameters";

const PhysicalParameters = ({ navigation }) => {
  const theme = useTheme();

  const imageAnimatedValue = useRef(new Animated.Value(0)).current;
  const [gender, setGender] = useState("female");

  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");

  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");

  const [age, setAge] = useState("");

  const [activeInput, setActiceInput] = useState(null);
  const { maleBtn, maleText, femaleBtn, femaleText } = useStyles(gender);

  useEffect(() => {
    Animated.timing(imageAnimatedValue, {
      toValue: gender === "male" ? 1 : 0,
      duration: 600
    }).start();
  }, [gender]);

  const AccessoryWeight = (
    <AccessoryRight
      units={[
        { title: "kg", value: "kg" },
        { title: "lbs", value: "lbs" }
      ]}
      value={weightUnit}
      onPress={(v) => setWeightUnit(v)}
    />
  );

  const AccessoryHeight = (
    <AccessoryRight
      units={[
        { title: "in", value: "in" },
        { title: "cm", value: "cm" }
      ]}
      value={heightUnit}
      onPress={(v) => setHeightUnit(v)}
    />
  );

  const getLabel = (name) => {
    const v = { weight, weightUnit, height, heightUnit };
    const unitValue = v[`${name}Unit`];

    return `${capitalizeFirstLetter(name)}${
      v[name] || activeInput === name ? `(${unitValue})` : ""
    }`;
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
          <Button style={maleBtn} onPress={() => setGender("male")}>
            {() => (
              <Text category="h6" style={maleText}>
                MALE
              </Text>
            )}
          </Button>
          <Button style={femaleBtn} onPress={() => setGender("female")}>
            {() => (
              <Text category="h6" style={femaleText}>
                FEMALE
              </Text>
            )}
          </Button>
        </View>
        <View style={styles.sizes}>
          <View style={[styles.size, styles.weight]}>
            <Madoka
              label={getLabel("weight")}
              borderColor={theme["color-primary-500"]}
              labelHeight={28}
              keyboardType="numeric"
              accessoryRight={AccessoryWeight}
              labelStyle={{ color: "#EBEBEB" }}
              inputStyle={{ color: "#fff" }}
              value={weight}
              onChange={({ nativeEvent: { text } }) => setWeight(text)}
              onFocus={() => setActiceInput("weight")}
              onBlur={() => setActiceInput(null)}
            />
          </View>
          <View style={[styles.size, styles.height]}>
            <Madoka
              label={getLabel("height")}
              borderColor={theme["color-primary-500"]}
              labelHeight={28}
              keyboardType="numeric"
              accessoryRight={AccessoryHeight}
              labelStyle={{ color: "#EBEBEB" }}
              inputStyle={{ color: "#fff" }}
              value={height}
              onChange={({ nativeEvent: { text } }) => setHeight(text)}
              onFocus={() => setActiceInput("height")}
              onBlur={() => setActiceInput(null)}
            />
          </View>
        </View>
        <View style={styles.age}>
          <View style={[styles.size]}>
            <Madoka
              label="Age"
              borderColor={theme["color-primary-500"]}
              labelHeight={28}
              keyboardType="numeric"
              labelStyle={{ color: "#EBEBEB" }}
              inputStyle={{ color: "#fff" }}
              value={age}
              onChange={({ nativeEvent: { text } }) => setAge(text)}
              onFocus={() => setActiceInput("age")}
              onBlur={() => setActiceInput(null)}
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
