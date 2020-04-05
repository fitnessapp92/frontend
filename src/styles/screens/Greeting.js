import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  bgMedia: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 0,
    left: 0,
    top: 0,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    paddingTop: 150,
  },
  content: {
    flex: 1,
    width: "90%",
  },
  appTitle: {
    marginTop: "35%",
  },
  line: {
    backgroundColor: "#fff",
    width: "100%",
    height: 20,
  },
  text: {
    color: "#fff",
    fontSize: 46,
    fontWeight: "bold",
    textAlign: "center",
  },
  slogan: {
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  sloganText: {
    color: "#fff",
    fontSize: 46,
    fontWeight: "bold",
    textAlign: "center",
  },
});
