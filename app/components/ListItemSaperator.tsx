import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../config/colors";

export default function ListItemSeparator() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 0.3,
    borderColor: colors.veryLight,
    marginVertical: 15,
  },
});
