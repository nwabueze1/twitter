import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import React from "react";
import TweetHeader from "./TweetHeader";
import { colors } from "../config/colors";
import { Entypo } from "@expo/vector-icons";

interface IMessageListItem {
  name: string;
  image: string;
  body: string;
  hashtag: string;
  time: string;
}
export default function MessageListItem(props: IMessageListItem) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={props.image as ImageSourcePropType}
          style={styles.imageContainer}
          resizeMode="center"
        />
      </View>
      <View style={styles.bodyContainer}>
        <View>
          <TweetHeader hashtag={props.hashtag} time={props.time} title={props.name} />
          <Text style={styles.body} numberOfLines={1}>
            {props.body}
          </Text>
        </View>
        <View>
          <Entypo name="dot-single" color={"dodgerblue"} size={25} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 60,
    overflow: "hidden",
    marginRight: 5,
  },
  body: {
    color: colors.lightGray,
    fontSize: 18,
  },
  bodyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
  },
});
