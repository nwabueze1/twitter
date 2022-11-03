import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../config/colors";

type iconType = "message1" | "retweet" | "hearto" | "sharealt";

interface IIcon {
  name: iconType;
  count?: number;
  fillColor?: string;
}

const Icon = ({ name, count, fillColor = colors.blue }: IIcon) => {
  const [filled, setFilled] = useState(false);
  const [counter, setCounter] = useState(count);

  const handlePress = () => {
    setCounter(filled ? counter - 1 : counter + 1);
    setFilled(!filled);
  };

  const iconColor = filled ? fillColor : colors.lightGray;

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <AntDesign name={(name === "hearto" && filled ? "heart" : name) as any} size={20} color={iconColor} />
        {count && <Text style={[styles.text, { color: iconColor }]}>{counter}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: {
    color: colors.lightGray,
    fontSize: 14,
    marginLeft: 3,
  },
});

export default React.memo(Icon);
