import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover"
  },
  gender: {
    marginTop: 150,
    flexDirection: "row",
    justifyContent: "center"
  },
  genderButtons: {
    // paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  age: {
    flexDirection: "row",
    justifyContent: "center"
  },
  weight: {},
  height: {},
  text: {},
  input: {},
  nextBtn: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "center"
  }
});
