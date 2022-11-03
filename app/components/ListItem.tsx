import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ITrendsForYou } from "../mock/trends";

export default function ListItem(props: ITrendsForYou) {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        <View>
          <AppText style={styles.title}>{props.title}</AppText>
          <AppText style={styles.hashtag}>{props.hashtag}</AppText>
          <AppText style={styles.title}>{props.tweets}</AppText>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <MaterialCommunityIcons name="dots-vertical" color={"#E1E8ED"} size={20} />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "400",
    fontSize: 15,
  },
  hashtag: {
    color: colors.black,
    fontSize: 16,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
