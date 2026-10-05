import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState("");

  const handleHello = () => {
    setShowName(name);
  };

  const [player1Choice, setPlayer1Choice] = useState("");
  const [player2Choice, setPlayer2Choice] = useState("");

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  function rockPaperScissors(player1: String, player2: String) {
    if (player1 === player2) {
      return;
    } else if (
      (player1 === "Rock" && player2 === "Scissors") ||
      (player1 === "Paper" && player2 === "Rock") ||
      (player1 === "Scissors" && player2 === "Paper")
    ) {
      setPlayer1Score(player1Score + 1);
    } else {
      setPlayer2Score(player2Score + 1);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
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
            accessibilityRole="button"
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

      <View style={styles.gameRow}>
        <View style={styles.playerSide}>
          <TextInput
            testID="player1Score"
            style={styles.playerScore}
            value={"Player1 Score: " + player1Score}
            editable={false}
          />

          <View style={styles.buttonRow}>
            <Pressable
              testID="player1Rock"
              accessibilityRole="button"
              style={styles.button}
              onPress={() => setPlayer1Choice("Rock")}
            >
              <Text style={styles.buttonText}>Rock</Text>
            </Pressable>

            <Pressable
              testID="player1Paper"
              accessibilityRole="button"
              style={styles.button}
              onPress={() => setPlayer1Choice("Paper")}
            >
              <Text style={styles.buttonText}>Paper</Text>
            </Pressable>

            <Pressable
              testID="player1Scissors"
              accessibilityRole="button"
              style={styles.button}
              onPress={() => setPlayer1Choice("Scissors")}
            >
              <Text style={styles.buttonText}>Scissors</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.playerSide}>
          <TextInput
            testID="player2Score"
            style={styles.playerScore}
            value={"Player2 Score: " + player2Score}
            editable={false}
          />

          <View style={styles.buttonRow}>
            <Pressable
              testID="player2Rock"
              accessibilityRole="button"
              style={styles.button}
              onPress={() => {
                if (player1Choice !== "") {
                  setPlayer2Choice("Rock");
                  rockPaperScissors(player1Choice, "Rock");
                }
              }}
            >
              <Text style={styles.buttonText}>Rock</Text>
            </Pressable>

            <Pressable
              testID="player2Paper"
              accessibilityRole="button"
              style={styles.button}
              onPress={() => {
                if (player1Choice !== "") {
                  setPlayer2Choice("Paper");
                  rockPaperScissors(player1Choice, "Paper");
                }
              }}
            >
              <Text style={styles.buttonText}>Paper</Text>
            </Pressable>

            <Pressable
              testID="player2Scissors"
              accessibilityRole="button"
              style={styles.button}
              onPress={() => {
                if (player1Choice !== "") {
                  setPlayer2Choice("Scissors");
                  rockPaperScissors(player1Choice, "Scissors");
                }
              }}
            >
              <Text style={styles.buttonText}>Scissors</Text>
            </Pressable>
          </View>
        </View>
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

  greetingContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    alignItems: "flex-start",
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
    width: 90,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
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
    alignItems: "flex-start",
  },

  result: {
    fontSize: 20,
  },

  gameRow: {
    flexDirection: "row",
    gap: 30,
    marginTop: 20,
  },

  playerSide: {
    alignItems: "center",
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

  playerScore: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    color: "black",
    fontSize: 18,
  },
});
