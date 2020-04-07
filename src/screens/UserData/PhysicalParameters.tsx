import React, { useState } from "react";
import { View } from "react-native";
import { Text, Button, Input } from "react-native-elements";

import withWrapper from "./withWrapper";

import { styles } from "styles/screens/UserData/PhysicalParameters";

const PhysicalParameters = ({ navigation }) => {
  const [gender, setGender] = useState("female");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      <View style={styles.genderButtons}>
        <Button
          title="Female"
          disabled={gender === "female"}
          onPress={() => setGender("female")}
        />
        <Button
          title="Male"
          disabled={gender === "male"}
          onPress={() => setGender("male")}
        />
      </View>
      <View style={styles.sizes}>
        <View style={styles.weight}>
          <View style={styles.text}>
            <Text h2>Weight</Text>
          </View>
          <View style={styles.input}>
            <Input
              placeholder="number"
              keyboardType="numeric"
              onEndEditing={({ nativeEvent: { text } }) => setWeight(text)}
            />
          </View>
        </View>
        <View style={styles.height}>
          <View style={styles.text}>
            <Text h2>Height</Text>
          </View>
          <View style={styles.input}>
            <Input
              placeholder="number"
              keyboardType="numeric"
              onEndEditing={({ nativeEvent: { text } }) => setHeight(text)}
            />
          </View>
        </View>
      </View>
      <View style={styles.age}>
        <View>
          <View style={styles.text}>
            <Text h2>Age</Text>
          </View>
          <View style={styles.input}>
            <Input
              placeholder="number"
              keyboardType="numeric"
              onEndEditing={({ nativeEvent: { text } }) => setAge(text)}
            />
          </View>
        </View>
      </View>
      <View style={styles.nextBtn}>
        <Button title="Next" onPress={() => navigation.navigate("Goal")} />
      </View>
    </>
  );
};

export default withWrapper(PhysicalParameters, {
  header: "What's you gender?",
  bg: require("assets/images/UserData/PhysicalParameters.jpg"),
});
