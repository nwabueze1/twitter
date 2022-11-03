import { View, Image, ImageBackground, StyleSheet, Text } from "react-native";
import React from "react";
import SearchInput from "./SearchInput";
import { Feather } from "@expo/vector-icons";
import { colors } from "../config/colors";
import AppText from "./AppText";

export const ListHeader = () => (
  <>
    <View style={styles.headerContainer}>
      <Image
        style={styles.avatar}
        source={require("../assets/images/passport5.jpg")}
        resizeMode="center"
      />
      <SearchInput placeholder={"Search Twitter"} />
      <Feather name="settings" size={25} color={colors.black} />
    </View>
    {/* image display*/}
    <ImageBackground
      source={require("../assets/images/football.jpg")}
      style={styles.imageBackground}
      resizeMode="cover"
      blurRadius={7}
    >
      <AppText style={{ color: colors.white, fontWeight: "400", fontSize: 17 }}>
        UEFA Champions League - LIVE
      </AppText>
      <AppText style={{ color: colors.white, fontWeight: "700", fontSize: 24 }}>
        Malmo vs Sharktar Donesk
      </AppText>
    </ImageBackground>
    <Text style={styles.text}>Tweets for you</Text>
  </>
);
export const styles = StyleSheet.create({
  avatar: {
    badgeContainer': 40,
    width: 40,
    borderRadius: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  imageBackground: {
    badgeContainer': 200,
    marginVertical: 10,
    justifyContent: "flex-end",
    padding: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 10,
  },
});
