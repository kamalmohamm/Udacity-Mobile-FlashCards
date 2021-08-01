import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export default function DeckScreen(props) {
  const { deck } = props;

  return (
    <View style={styles.container}>
      <View>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
