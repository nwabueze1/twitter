import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../config/colors";
import Icon from "./Icon";
import { ITweets } from "../mock/tweets";
import TweetHeader from "./TweetHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppListItem(props: ITweets) {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} resizeMode="center" />

      <View style={styles.tweetContainer}>
        <View style={[styles.actionSection, { margin: 0 }]}>
          <TweetHeader hashtag={props.hashtag} time={props.time} title={props.name} />
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons name="dots-vertical" color={"#E1E8ED"} size={20} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.body} numberOfLines={4}>
            {props.body}
          </Text>
          {props.photo && (
            <Image
              source={props.photo}
              style={[styles.photo, { marginBottom: 5 }]}
              resizeMode="center"
            />
          )}
        </View>
        <View style={[styles.actionSection]}>
          <Icon name="message1" count={props.replies} />
          <Icon name="retweet" count={props.retweet} />
          <Icon name="hearto" count={props.likes} fillColor={colors.love} />
          <Icon name="sharealt" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionSection: {
    flexDirection: "row",
    // marginTop: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  body: {
    color: colors.black,
    fontWeight: "400",
    fontSize: 15,
    // textAlign: "justify",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    // alignContent: "flex-start",
    paddingHorizontal: 10,
  },
  image: {
    badgeContainer: 50,
    width: 50,
    borderRadius: 50,
    marginTop: 5,
    height: 50,
  },
  tweetContainer: {
    marginLeft: 5,
    flexWrap: "nowrap",
    width: "82%",
  },
  titleContainer: {
    flexDirection: "row",
  },
  photo: {
    badgeContainer: 300,
    width: "100%",
    borderRadius: 10,
    height: 250,
  },
});
