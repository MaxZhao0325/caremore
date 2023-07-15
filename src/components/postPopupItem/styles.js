import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
    left: Dimensions.get("window").width * 0.05,
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.15,
    alignItems: "center",
    justifyContent: "space-around",
    // flexDirection: "column",
    // alignItems: "center",
    // width: "90%",
    // alignSelf: "center",
  },
  // leftContainer: {
  //   flexDirection: "column",
  //   flex: 1,
  // },
  // rightContainer: {
  //   flex: 1,
  // },
  profileImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  infoContainer: {
    marginHorizontal: 10,
    justifyContent: "space-around",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 14,
  },
  starRating: {
    flexDirection: "row",
    marginVertical: 5,
  },
});

export default styles;
