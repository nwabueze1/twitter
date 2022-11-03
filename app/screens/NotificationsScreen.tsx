import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";

export default function NotificationsScreen() {
  return (
    <AppScreen>
      <AppText>You have no notifications yet.</AppText>
    </AppScreen>
  );
}

const styles = StyleSheet.create({});
