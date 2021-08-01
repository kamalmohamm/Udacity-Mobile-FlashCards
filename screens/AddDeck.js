import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { Text, View } from "../components/Themed";
import { addDeck } from "../dataLayer/decksSlice";

export default function DeckScreen(props) {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text>What is the title of your deck?</Text>
        <TextInput
          placeholder="Deck Title"
          value={title}
          onChangeText={setTitle}
        />
        <Button
          title="ADD"
          onPress={() => {
            dispatch(addDeck(title));
            goBack();
          }}
        />
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
