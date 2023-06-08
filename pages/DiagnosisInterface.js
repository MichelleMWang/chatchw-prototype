import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Button } from "react-native-web";

export default function DiagnosisInterface({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      questionText: "What is the Patient's Sex?",
      answerOptions: ["Male", "Female", "Nonbinary"],
    },
    {
      questionText: "What is the Patient's Age?",
      answerOptions: [],
    },
    {
      questionText: "Is the Patient with a Caregiver?",
      answerOptions: ["Yes", "No", "Don't Know"],
    },
    {
      questionText: "What Brings the Patient Here?",
      answerOptions: ["Diarrhea", "Diarrhea with Fever"],
    },
  ];
  return (
    <View style={styles.container}>
      <Text>Quiz </Text>
      <Text>{questions[currentQuestion].questionText}</Text>
      <Text>
        {questions[currentQuestion].answerOptions.map((text) => {
          return (
            <View>
              <Text>{text}</Text>
            </View>
          );
        })}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
