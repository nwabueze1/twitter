import { Platform, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { Screen } from "react-native-screens";
import Constants from "expo-constants";

interface IProps {
  children: ReactNode;
  style?: any;
}

export default function AppScreen({ children, style }: IProps) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    flex: 1,
    width: "100%",
  },
});
