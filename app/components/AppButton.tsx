import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";
import { colors } from "../config/colors";

type variant = "contained" | "outlined";
interface IButtonProps {
  onPress: () => void;
  title: string;
  variant?: variant;
}

export default function AppButton({ onPress, title, variant = "contained" }: IButtonProps) {
  const getButtonStyle = variant === "contained" ? styles.contained : styles.outLined;

  const getTextStyle = variant === "outlined" ? styles.outlinedText : {};
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, getButtonStyle]}>
      <AppText style={[styles.text, getTextStyle]}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    marginVertical: 3,
  },
  text: {
    textAlign: "center",
    textTransform: "capitalize",
    color: colors.white,
  },
  outlinedText: {
    color: colors.blue,
  },

  outLined: {
    borderWidth: 1,
    borderColor: colors.blue,
  },
  contained: {
    backgroundColor: "#1DA1F2",
  },
});
