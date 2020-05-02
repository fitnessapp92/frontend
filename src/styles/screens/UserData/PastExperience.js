import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: 20
  },

  slider: {
    width: "80%"
  },
  sliderTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%"
  },
  exerciseTime: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 20
  },
  week: {
    flexDirection: "row",
    justifyContent: "space-around",

    width: "90%",
    marginBottom: 10
  },
  sliderText: {},
  nextBtn: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  day: {
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 22,
    width: 44,
    height: 44
  }
});
