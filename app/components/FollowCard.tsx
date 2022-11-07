import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../config/colors";
import FollowButton from "./FollowButton";
import { transformWord } from "../utils/transformWord";

export default function FollowCard(props: {
  name: string;
  hashtag: string;
  image: any;
  onPress: (name: string) => void;
}) {
  return (
    <View style={styles.card}>
      <TouchableWithoutFeedback onPress={() => props.onPress(props.name)}>
        <AntDesign
          name="close"
          size={20}
          color={colors.lightGray}
          style={{ position: "absolute", right: 10, top: 5 }}
        />
      </TouchableWithoutFeedback>
      <Image source={props.image} style={styles.passport} resizeMode="center" />
      <Text style={{ fontWeight: "700" }}>{transformWord(props.name, 10)}</Text>
      <Text style={{ color: colors.lightGray }}>{props.hashtag}</Text>
      <FollowButton />
    </View>
  );
}

const styles = StyleSheet.create({
  passport: {
    width: 80,
    borderRadius: 50,
    height: 80,
  },
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 5,
    width: 130,
    position: "relative",
    alignItems: "center",
    margin: 10,
    height: 200,
  },
});
