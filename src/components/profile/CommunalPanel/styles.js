import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  tabsContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tab: {
    padding: 10,
    color: "#888",
  },
  activeTab: {
    padding: 10,
    fontWeight: "bold",
    color: "black",
  },
});
export default styles;
