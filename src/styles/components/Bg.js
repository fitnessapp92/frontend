import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bgMedia: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    left: 0,
    top: 0
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    paddingTop: 150
  }
});
