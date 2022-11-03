import { Text, FlatList } from "react-native";
import React from "react";
import ListItemSeparator from "./ListItemSaperator";
import FollowCard from "./FollowCard";
import { ITweets, tweets } from "../mock/tweets";

export const ListFooter = () => {
  const [data, setData] = React.useState<ITweets[]>([]);

  const handlePress = (name: string) => setData(data.filter((c) => c.name !== name));

  React.useEffect(() => {
    setData(tweets);
  }, []);

  return (
    <>
      <Text style={{ color: "dodgerblue", fontSize: 17, marginLeft: 10 }}>See more</Text>
      <ListItemSeparator />
      <Text style={{ fontWeight: "700", fontSize: 18, marginBottom: 10, marginLeft: 10 }}>
        Who to follow
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(c) => c.id.toString()}
        renderItem={({ item }) => <FollowCard {...item} onPress={handlePress} />}
      />
    </>
  );
};
