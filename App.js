import { StyleSheet, Text, View } from "react-native-web";
import LoginScreen from "./src/componentes/login";
import RegisterScreen from "./src/componentes/cadastro";
import chat from "./src/componentes/chat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useCallback, useEffect } from "react";

const Stack = createNativeStackNavigator();

function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="cadastro" component={RegisterScreen} />
        <Stack.Screen name="chat" component={chat} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;