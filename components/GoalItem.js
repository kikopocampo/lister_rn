import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      onPress={() => props.deleteTodoHandler(props.id)}
      style={({ pressed }) => {
        return pressed && styles.pressedItem;
      }}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "darkgreen",
  },
  pressedItem: { opacity: 0.5 },
  goalText: {
    textAlign: "center",
    color: "white",
  },
});
