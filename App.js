import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "shopping", id: "1" },
    { text: "renew licence", id: "2" },
    {
      text: "cancel netflix subscription on 10/10/2024 in account abcdefrgs",
      id: "3",
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem
                title={item.text}
                onPress={() => {
                  setTodos((prevTodos) => {
                    return prevTodos.filter((todo) => todo.id != item.id);
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  content: {
    padding: 20,
  },
  list: {
    marginTop: 20,
  },
});
