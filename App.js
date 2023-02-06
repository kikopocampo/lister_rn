import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [enteredText, setEnteredText] = useState("");
  const [todo, setTodo] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    setTodo((prev) => [
      ...prev,
      { text: enteredText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
    setEnteredText("");
  }

  function deleteTodoHandler(itemData) {
    setTodo((prev) => prev.filter((el) => el.id !== itemData));
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Todo"
          color="white"
          onPress={() => setModalIsVisible(true)}
        />

        <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          enteredText={enteredText}
          visible={modalIsVisible}
          closeModal={() => setModalIsVisible(false)}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={todo}
            alwaysBounceVertical={false}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  deleteTodoHandler={deleteTodoHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
    backgroundColor: "black",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
