import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Button, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import { decksSelector } from "../dataLayer/decksSelectors";
import { useSelector } from "react-redux";

export default function DeckListScreen(props) {
  const decks = useSelector(decksSelector);
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Decks</Text>
      {decks.map((deck) => (
        <TouchableOpacity onPress={() => navigate("DeckScreen")}>
          <Text>{deck.title}</Text>
          <Text>{deck.cards.length}</Text>
          <View style={styles.separator} />
        </TouchableOpacity>
      ))}
      <View style={styles.floatingButtonWrapper}>
        <Button title="+" onPress={() => navigate("AddDeckScreen")} />
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  floatingButtonWrapper: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
