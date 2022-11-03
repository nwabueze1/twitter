import { StyleSheet, View } from "react-native";
import { transformWord } from "../utils/transformWord";
import AppText from "./AppText";

interface TweetHeader {
  title: string;
  hashtag: string;
  time: string;
}

const TweetHeader = ({ hashtag, time, title }: TweetHeader) => (
  <View style={styles.titleContainer}>
    <AppText style={styles.title}>{title}</AppText>
    <AppText style={styles.subtitle}>{transformWord(hashtag, 3)}</AppText>
    <AppText style={styles.subtitle}> - {time}</AppText>
  </View>
);

const styles = StyleSheet.create({
  title: { color: "#000", fontWeight: "500" },
  subtitle: {
    fontWeight: "400",
    marginLeft: 2,
    fontSize: 16,
  },
  titleContainer: {
    flexDirection: "row",
  },
});

export default TweetHeader;
