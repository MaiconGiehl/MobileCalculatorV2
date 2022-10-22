import { Text, View } from "react-native";
import { viewStyles } from "../assets/styles/view.style";

export function CalculadoraView() {
  return (
    <View style={viewStyles.container}>
      <Text style={viewStyles.textHeader}>2 + 3 =</Text>
      <Text style={viewStyles.textResult}></Text>
    </View>
  );
}
