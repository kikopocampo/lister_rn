import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [todo, setTodo] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredText(enteredText);
  }
  function addGoalHandler() {
    setTodo((prev) => [...prev, enteredText]);
    setEnteredText("");
  }
  // console.log(todo);
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="What do you need to do?"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <Button title="Add to list" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {todo.map((el, i) => {
            return (
              <View key={i} style={styles.goalItem}>
                <Text style={styles.goalText}>{el}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
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
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "darkgreen",
  },
  goalText: {
    textAlign: "center",
    color: "white",
  },
});
