import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: "100%",
    zIndex: 60
  },
  bgContainer: {
    position: "absolute",
    top: 0,
    left: 0,

    width: "100%",
    height: "100%"
    // zIndex: 40,
  },
  bgImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },

  bgColor: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    zIndex: 50
  },

  genderButtons: {
    // paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  genderBtn: {
    // paddingLeft: 30,
    // paddingRight: 30,
    // paddingTop: 15,
    // paddingBottom: 15
    // paddingLeft: 20,
    width: "30%",
    borderRadius: 0
  },
  sizes: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  age: {
    flexDirection: "row",
    justifyContent: "center"
  },
  size: {
    width: "30%"
  },
  genderrActiveBtn: {
    backgroundColor: "rgba(245, 212, 209, 0.4)",
    borderWidth: 0
  },
  genderActiveText: {
    color: "#fff"
  }
});
