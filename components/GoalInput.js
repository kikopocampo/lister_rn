import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          placeholder="What do you need to do?"
          style={styles.textInput}
          onChangeText={props.goalInputHandler}
          value={props.enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add to list"
              onPress={props.addGoalHandler}
              color="white"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.closeModal} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    backgroundColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    opacity: 0.8,
    borderRadius: 6,
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
});
