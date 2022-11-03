import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SpacesCard from "../components/SpacesCard";

export default function SpacesScreen() {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.headerContainer}>
        <AppText style={styles.title}>Happening Now</AppText>
        <AppText style={styles.subTitle}>Spaces going on right now</AppText>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SpacesCard backgroundImage={colors.black} title="#ENS CHILL VIBES" />
        <SpacesCard backgroundImage={"navy"} title="INVASION OF UKRAIN - HELP" />
        <SpacesCard backgroundImage={"darkred"} title="How to get a Tech job" />
        <SpacesCard backgroundImage={"darkblue"} title="The target is $1000" />
      </ScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.black,
  },
  subTitle: {
    fontWeight: "normal",
    fontSize: 16,
  },
  headerContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  card: {
    padding: 10,
    backgroundColor: colors.black,
    borderRadius: 15,
  },
  container: {
    padding: 10,
  },
  cardHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardHeaderText: { color: colors.white, fontSize: 19, marginLeft: 5 },
  cardBody: {
    marginHorizontal: 10,
  },
  cardBodyTitle: {
    color: colors.white,
    fontSize: 23,
    fontWeight: "700",
  },
  imageCollection: {
    flexDirection: "row",
  },
  image: {
    badgeContainer': 30,
    width: 30,
    borderRadius: 30,
    position: "relative",
  },
  adjustImagePosition: {
    position: "absolute",
    left: 10,
  },
  showAbove: {
    zIndex: 1,
  },
  hostImage: {
    badgeContainer': 30,
    width: 30,
    borderRadius: 30,
  },
});
