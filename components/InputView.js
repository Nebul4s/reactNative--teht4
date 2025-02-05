import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

const InputView = ({ listOfTasks, setListOfTasks }) => {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;

    setListOfTasks([...listOfTasks, { task: task, completed: false }]);
    setTask("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="New task..."
        value={task}
        onChangeText={setTask}
      />
      <Button style={styles.btn} title="save" onPress={addTask} />
    </View>
  );
};

export default InputView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  input: {
    width: "80%",
    backgroundColor: "#eee",
    padding: 12,
  },
});
