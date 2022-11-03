import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import TwitterIcon from "../components/TwitterIcon";
import AppButton from "../components/AppButton";

export default function LoginScreen() {
  return (
    <AppScreen style={styles.container}>
      <TwitterIcon style={styles.icon} />
      <AppTextInput name="email" placeholder="Email" type="email-address" />
      <AppTextInput name="password" placeholder="Password" type="password" />
      <AppButton title="Login" onPress={() => {}} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: "center",
    flex: 1,
  },
  icon: {
    marginTop: 150,
    marginBottom: 50,
  },
});
