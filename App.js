import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InputView from "./components/InputView";
import ListView from "./components/ListView";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [listOfTasks, setListOfTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem("listOfTasks");
        if (storedTasks) {
          setListOfTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem("listOfTasks", JSON.stringify(listOfTasks));
      } catch (error) {
        console.error(error);
      }
    };

    if (listOfTasks.length > 0) {
      saveTasks();
    }
  }, [listOfTasks]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputView listOfTasks={listOfTasks} setListOfTasks={setListOfTasks} />
      <ListView listOfTasks={listOfTasks} setListOfTasks={setListOfTasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: "#fff",
  },
});
