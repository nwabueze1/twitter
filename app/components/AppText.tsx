import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../config/colors";

interface ITextProps {
  children: React.ReactNode;
  style?: any;
}
export default function AppText({ children, style }: ITextProps) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.lightGray,
    fontWeight: "700",
    fontSize: 18,
  },
});
