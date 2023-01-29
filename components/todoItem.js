import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.title}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderStlye: "dashed",
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
});
