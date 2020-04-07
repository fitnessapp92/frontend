import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  slider: {
    width: "80%",
    marginTop: 30,
  },
  sliderTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "green",
    width: "80%",
  },
  exerciseTime: {
    width: "90%",
    marginTop: 30,
  },
  week: {
    flexDirection: "row",
    justifyContent: "space-around",

    width: "90%",
    marginBottom: 10,
  },
  sliderText: {},
  nextBtn: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  day: {
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 20,
    width: 44,
    height: 44,
  },
  dayTitle: {
    marginTop: -5,
  },
});
