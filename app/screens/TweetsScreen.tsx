import { FlatList, StyleSheet } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import AppListItem from "../components/AppListItem";
import { tweets } from "../mock/tweets";
import ListItemSeparator from "../components/ListItemSaperator";

export default function TweetsScreen() {
  return (
    <AppScreen style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(c) => c.id.toString()}
        renderItem={({ item }) => <AppListItem {...item} />}
        data={tweets}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
