import { StyleSheet } from "react-native";

export const keysStyles = StyleSheet.create({
  rowKeys: {
    paddingTop: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
  },
  columnKey: {
    width: "22.2%",
    height: 55,
    marginLeft: 10,
    fontFamily: "Arial",
    fontSize: 19,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowColor: "#c9c9c9",
  },
  backspace: {
    width: 30,
    height: 30,
  },
  keyText: {
    fontFamily: "Arial",
    fontSize: 19,
  },
});
