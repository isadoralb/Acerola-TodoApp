import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Navegação</Text>
      <Button style={styles.button} onPress={() => navigation.navigate("AddTaskScreen")}>
       Adicionar Tarefa
      </Button>
      
      <Button Button style={styles.button} onPress={() => navigation.navigate("HomeScreen")}>
        HomeScreen
      </Button>
    </View>
  );
}