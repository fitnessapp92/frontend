import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 40
  },
  bgColor: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    zIndex: 50
  },
  content: {
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 60
  },
  header: {
    zIndex: 60,
    marginTop: 100,
    marginBottom: 40
  },
  headerText: {
    textAlign: "center"
  },
  nextBtnWrapper: {
    alignSelf: "center",
    marginTop: 20,
    width: 200,
    zIndex: 60
  },
  buttonIconNext: {
    paddingLeft: 10
  }
});
