import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SpacesCard(props: { backgroundImage?: string; title?: string }) {
  return (
    <View style={[styles.card, { backgroundColor: props.backgroundImage }]}>
      <View style={styles.cardHeaderContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="google-podcast" color={colors.white} size={19} />
          <Text style={styles.cardHeaderText}>Live</Text>
        </View>
        <MaterialCommunityIcons name="dots-vertical" color={colors.white} size={19} />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardBodyTitle}>{props.title}</Text>
        <View style={styles.imageCollection}>
          <View style={styles.imageCollection}>
            <Image
              source={require("../assets/images/passport2.jpg")}
              style={[styles.image]}
              resizeMode="center"
            />
            <Image
              source={require("../assets/images/passport3.jpg")}
              style={[styles.image, styles.adjustImagePosition, styles.showAbove]}
              resizeMode="center"
            />
            <Image
              source={require("../assets/images/passport4.jpg")}
              style={[styles.image, styles.adjustImagePosition, { left: 20 }]}
              resizeMode="center"
            />
          </View>
          <Text style={[{ marginLeft: 25, color: colors.white, fontSize: 18 }]}>23 Listening</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Image
            source={require("../assets/images/passport5.jpg")}
            style={styles.hostImage}
            resizeMode="center"
          />
          <Text numberOfLines={1} style={{ color: colors.white, fontSize: 18, marginLeft: 5 }}>
            Lucy Mariam - Host
          </Text>
        </View>
        <Text numberOfLines={2} style={{ color: colors.white }}>
          If you are focused on anything other than the 'renaissance of the internet' aka Web3 aka
          @ettherum
        </Text>
      </View>
    </View>
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
    marginBottom: 20,
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
