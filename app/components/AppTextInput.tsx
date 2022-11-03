import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IInputProps {
  name: string;
  type: KeyboardTypeOptions | "password";
  placeholder: string;
  value?: string;
  onChange?: (e: string) => void;
}
export default function AppTextInput({ name, onChange, type, value, placeholder }: IInputProps) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={type === "email-address" ? "email" : type === "password" ? "lock" : "account"} size={30} color={colors.blue} />
      <TextInput
        keyboardType={type as KeyboardTypeOptions}
        onChangeText={onChange}
        value={value}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.blue}
        secureTextEntry={type === "password"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.blue,
    padding: 5,
    margin: 4,
  },
  input: {
    flex: 1,
    color: colors.blue,
    fontSize: 18,
  },
});
