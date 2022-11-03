import { StyleSheet, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import TwitterIcon from "../components/TwitterIcon";

export default function WelcomeScreen() {
  return (
    <AppScreen>
      <View style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <TwitterIcon />
          <AppText style={styles.text}>Welcome to twitter</AppText>
          <AppText style={styles.subTitle}>Bringing the world closer to you</AppText>
        </View>

        <AppButton onPress={() => {}} title="Login" variant="outlined" />
        <AppButton onPress={() => {}} title="Register" />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 5,
  },
  container: {
    padding: 5,
    width: "100%",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 200,
  },
  text: {
    color: "#3a3d3b",
  },
  subTitle: {
    color: "#5f6361",
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "italic",
  },
});
