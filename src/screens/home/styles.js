import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  searchButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 60,
    borderRadius: 20,
    marginHorizontal: 10,
    width: Dimensions.get("screen").width - 20,
    justifyContent: "center",
    alignItems: "center",
    top: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
