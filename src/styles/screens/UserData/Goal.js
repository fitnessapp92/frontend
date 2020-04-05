import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  goalText: {
    marginTop: 150,
    width: "90%"
    // flexDirection: "row",
    // justifyContent: "center"
  },
  goals: {
    flexDirection: "column",
    justifyContent: "center",
    width: "80%",
    marginTop: 20
    // borderWidth: 4,
    // borderColor: "red"
  },
  goal: {
    marginTop: 20
  }
});
