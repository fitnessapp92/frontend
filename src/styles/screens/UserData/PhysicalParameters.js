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

  man: {
    // position: "absolute"
    // zIndex: 1
    // right: "10%"
    // transform: [
    //   {
    //     translateX: -200
    //   }
    // ],
  },
  wooman: {
    // left: "90%"
    // position: "absolute"
  },
  genderButtons: {
    // paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  genderBtn: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15
    // paddingLeft: 20
  },
  activeGenderBtn: {
    // padding: 20,
    backgroundColor: "red"
    // color: "black"
  },
  sizes: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  age: {
    flexDirection: "row",
    justifyContent: "center"
    // width: "100%",
  },
  weight: {},
  height: {},
  text: {},

  input: {
    backgroundColor: "rgba(19, 25, 29, 0.6)",
    color: "#fff",
    // borderColor: "rgba(19, 25, 29, 0.6)",
    // borderRadius: 22,
    borderWidth: 0
  },
  inputText: {
    color: "#fff"
    // fontSize: 19
  },
  buttonText: {},
  genderBtn: {
    width: "30%",
    borderRadius: 0
  },
  size: {
    width: "30%"
  },
  weight: {}
});
