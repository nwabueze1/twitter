import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AppScreen from "../components/AppScreen";
import AppListItem from "../components/AppListItem";
import { ITweets, tweets } from "../mock/tweets";
import MessageListItem from "../components/MessageListItem";

export default function MessagesScreen() {
  const [data, setData] = useState<ITweets[]>([]);

  useEffect(() => {
    setData(
      tweets.map((c, i) => ({
        ...c,
        body:
          i % 2 == 0
            ? "How are you doing"
            : i % 3 === 0
            ? "Are you free this weekend"
            : "How far ?",
      }))
    );
  }, []);
  return (
    <AppScreen style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(c) => c.id.toString()}
        renderItem={({ item }) => <MessageListItem {...item} />}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
