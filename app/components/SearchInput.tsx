import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../config/colors";

export default function SearchInput({ placeholder }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.veryLight,
    borderWidth: 0.7,
    borderColor: colors.lightGray,
    borderRadius: 20,
    width: "70%",
    badgeContainer: 35,
  },
  input: {
    padding: 5,
  },
});
