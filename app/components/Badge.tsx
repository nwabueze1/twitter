import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";

type iconName = "plus" | "mail" | "record";

interface IProps {
  iconName: iconName;
}

export default function Badge({ iconName }: IProps) {
  const [isOpen, setOpen] = useState(false);

  const handlePress = () => setOpen(!isOpen);
  return (
    <View>
      {isOpen ? (
        <View style={styles.iconContainers}>
          <MaterialCommunityIcons name="nodejs" size={28} color="green" />
          <MaterialCommunityIcons name="vuejs" size={28} color="green" />
          <MaterialCommunityIcons name="react" size={28} color="dodgerblue" />
          <MaterialCommunityIcons name="angular" size={28} color="red" />
        </View>
      ) : null}
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.badgeContainer}>
          <MaterialCommunityIcons name={iconName} size={25} color={colors.white} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    height: 65,
    width: 65,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 40,
    position: "absolute",
    bottom: 30,
    right: 10,
  },
  iconContainers: {
    position: "absolute",
    bottom: 120,
    right: 19,
    width: 40,
  },
});
