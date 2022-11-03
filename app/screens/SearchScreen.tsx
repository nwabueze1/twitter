import { FlatList } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import ListItem from "../components/ListItem";
import { ITrendsForYou, trendsForYou } from "../mock/trends";
import { ListHeader } from "../components/ListHeader";
import { ListFooter } from "../components/ListFooter";

export default function SearchScreen() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<ITrendsForYou[]>([]);

  const loadData = () => setData(trendsForYou);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      loadData();
      setLoading(false);
    }, 500);
  };

  React.useEffect(() => {
    loadData();
  }, []);
  return (
    <AppScreen>
      <FlatList
        refreshing={loading}
        onRefresh={handleRefresh}
        ListHeaderComponent={ListHeader}
        scrollEnabled
        keyExtractor={(c) => c.id.toString()}
        data={data}
        renderItem={({ item }) => <ListItem {...item} />}
        ListFooterComponent={ListFooter}
      />
    </AppScreen>
  );
}
