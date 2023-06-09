import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function DiagnosisInterface({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState(null); 
  const [textInput, setTextInput] = useState("");
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
    {
      questionText: "Does the Patient Have a Fever?",
      answerOptions: ["Yes", "No", "Don't Know"],
    }, 
    {
      questionText: "Is there Blood in the Diarrhea?",
      answerOptions: ["Yes", "No", "Don't Know"],
    }, 
    { 
      questionText: "How many Days has Diarrhea Lasted?",
      answerOptions: ["Don't Know"],
    }, 
    {
      questionText: "Is the Patient Dehydrated?",
      answerOptions: ["Yes", "No", "Don't Know"],
    }, 
    {
      questionText: "What is the Patient's Temperature?",
      answerOptions: ["No Thermometer, Feels Okay", "No Thermometer, Feels Feverish"],
    }, 
  ];
  const onText = (e) => {
    setTextInput(e);
    setAnswer(e);
  }
  const onSubmitQuestion = (e) => {
    console.log(e); 
    setAnswer(null); 
    setTextInput("");
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      Diagnose(); 
    }

  }
  const Diagnose = () => {
    //diagnose the patient and give treatment options
  }

  return (
    <View style={styles.container}>
      <Text>Quiz </Text>
      <Text>{questions[currentQuestion].questionText}</Text>
      <Text>
        {questions[currentQuestion].answerOptions.map((text) => {
          return (
            <View>
              <Button title={text} onPress={() => setAnswer(text)} />
            </View>
          );
        })}
      </Text> 
      <TextInput placeholder={"other..."} value={textInput} onChangeText={onText}/>
      <Button title="Next" onPress={onSubmitQuestion}/> 
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
