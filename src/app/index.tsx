import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState("");

  const handleHello = () => {
    setShowName(name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          testID="nameInput"
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Pressable
          testID="helloButton"
          style={styles.button}
          onPress={handleHello}
        >
          <Text style={styles.buttonText}>Hello</Text>
        </Pressable>
      </View>

      <View style={styles.resultContainer}>
        {showName !== "" && (
          <Text testID="resultText" style={styles.result}>
            Hello {showName}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    width: 200,
    height: 45,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },

  button: {
    height: 45,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#007AFF",
    borderRadius: 8,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  resultContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  result: {
    fontSize: 20,
  },
});
