import { View, StyleSheet} from "react-native";
import { Button, Text,Snackbar } from "react-native-paper";
import { styles } from "../utils/styles";
import * as React from 'react';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
          },
        }}>
        Isso é uma Snackbar
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
export default MyComponent;

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

      <Button Button style={styles.button} onPress={() => navigation.navigate("LoadingScreen")}>
        LoadingScreen
      </Button>

      <Button Button style={styles.button} onPress={() => navigation.navigate("SnackbarScreen")}>
        SnackbarScreen
      </Button>
    </View>
  );
}