import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddTaskScreen from "./screens/AddTaskScreen";
import EditTaskScreen from "./screens/EditTaskScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
        <Stack.Screen name="EditTaskScreen" component={EditTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}