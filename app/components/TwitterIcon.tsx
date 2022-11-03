import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";

interface IProp {
  style?: any;
}
export default function TwitterIcon({ style }: IProp) {
  return <MaterialCommunityIcons name="twitter" style={style} color={colors.blue} size={80} />;
}

// const styles = StyleSheet.create({})
