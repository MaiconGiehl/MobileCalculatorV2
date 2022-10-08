import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { homeStyles } from "./assets/styles/home.style";
import { CalculadoraView } from "./components/calculadora-view";
import { CalculadoraKeys } from "./components/calculadora-keys";

export default function App() {
  return (
    <View style={homeStyles.container}>
      <CalculadoraView></CalculadoraView>
      <CalculadoraKeys></CalculadoraKeys>
      <StatusBar style="auto" />
    </View>
  );
}
