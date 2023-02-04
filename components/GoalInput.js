import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";

const GoalInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="What do you need to do?"
        style={styles.textInput}
        onChangeText={props.goalInputHandler}
        value={props.enteredText}
      />
      <Button title="Add to list" onPress={props.addGoalHandler} />
    </View>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
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
});
