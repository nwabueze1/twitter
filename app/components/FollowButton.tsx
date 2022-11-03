import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../config/colors";

export default function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handlePress = () => setIsFollowing(!isFollowing);
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isFollowing ? colors.white : colors.black,
          },
        ]}
      >
        <Text
          style={[
            styles.text,
            {
              color: isFollowing ? colors.black : colors.white,
            },
          ]}
        >
          {isFollowing ? "Following" : "Follow"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    minWidth: 90,
    marginVertical: 10,
    borderColor: colors.black,
    borderWidth: 1,
  },
  text: {
    color: colors.white,
    fontWeight: "700",
    textAlign: "center",
  },
});
