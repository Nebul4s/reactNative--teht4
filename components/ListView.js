import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";

const ListView = ({ listOfTasks, setListOfTasks }) => {
  const toggleCompletion = (index) => {
    const updatedTasks = listOfTasks.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );

    setListOfTasks(updatedTasks);
  };

  return (
    <ScrollView>
      {listOfTasks &&
        listOfTasks.map((item, index) => (
          <Text
            key={index}
            onPress={() => toggleCompletion(index)}
            style={[
              styles.listItem,
              item.completed
                ? {
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                    color: "gray",
                  }
                : {},
            ]}
          >
            {item.task}
          </Text>
        ))}
    </ScrollView>
  );
};

export default ListView;

const styles = StyleSheet.create({
  listItem: {
    padding: 16,
    fontSize: 18,
  },
  completed: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "gray",
  },
});
