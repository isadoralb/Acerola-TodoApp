import * as React from "react";
import { View } from "react-native";
import { Text, Button, Snackbar } from "react-native-paper";
import { styles } from "../utils/styles";

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text variant="headlineLarge">Snackbar</Text>
      </View>
      <Button onPress={onToggleSnackBar}>
        {visible ? "Esconder" : "Mostrar"}
      </Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Voltar",
          onPress: () => {},
        }}
      >
        Acerola!!
      </Snackbar>
    </View>
  );
};

export default MyComponent;
