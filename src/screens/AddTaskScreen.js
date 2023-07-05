import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";
import { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { View } from "react-native";
import React from "react";

export default function AdicionarTasks() {
  const [nome, setNome] = useState("");

  async function handleAdicionarTasks() {
    console.log(nome);
    try {
      const tasksRef = collection(db, "tasks");
      const inserir = {
        Tarefa: nome,
      };
      const tasks = await addDoc(tasksRef, inserir);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Adicionar Tarefa</Text>

      <TextInput label="Nome" value={nome} onChangeText={setNome} />
      <Button onPress={handleAdicionarTasks}>Adicionar Tarefa</Button>
    </View>
  );
}