import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState("");

  const handleHello = () => {
    setShowName(name);
  };

  let player1Score = 0;
  let player2Score = 0;

  let [player1Input, setPlayer1Input] = useState("");
  let [player2Input, setPlayer2Input] = useState("");

  function rockpaperscissors(input: String) {
    let player1 = input;
    let player2;
    if (player2 === "") {
      player2 = input;
      return;
    }

    // if (player1Input === "Rock") {
    //   if (player2Input === "Rock") {
    //     return;
    //   }
    //   else if (player2Input === "Paper") {
    //     return player2Score = player2Score + 1;
    //   }
    //   else if (player2Input === "Scissors") {
    //     return player1Score = player1Score + 1;
    //   }
    // }

    // else if (player1Input === "Paper") {
    //   if (player2Input === "Rock") {
    //     return player1Score = player1Score + 1;
    //   }
    //   else if (player2Input === "Paper") {
    //     return;
    //   }
    //   else if (player2Input === "Scissors") {
    //     return player2Score = player2Score + 1;
    //   }
    // }

    // else if (player1Input === "Scissors") {
    //   if (player2Input === "Rock") {
    //     return player2Score = player2Score + 1;
    //   }
    //   else if (player2Input === "Paper") {
    //     return player1Score = player1Score + 1
    //   }
    //   else if (player2Input === "Scissors") {
    //     return;
    //   }

    return;
  }

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

      <View style={styles.buttonRow}>
        <Pressable
          style={styles.button}
          onPress={() => rockpaperscissors("Rock")}
        >
          <Text style={styles.buttonText}>Rock</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => rockpaperscissors("Paper")}
        >
          <Text style={styles.buttonText}>Paper</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => rockpaperscissors("Scissors")}
        >
          <Text style={styles.buttonText}>Scissors</Text>
        </Pressable>

        <TextInput
          style={styles.playerInput}
          placeholder="Player1"
          placeholderTextColor="888"
          editable={false}
        />

        <TextInput
          style={styles.playerInput}
          placeholder="Player2"
          placeholderTextColor="888"
          value={}
          editable={false}
        />
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

  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },

  playerInput: {
    flex: 1,
    padding: 22,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    color: "black",
    fontSize: 18,
  },
});
