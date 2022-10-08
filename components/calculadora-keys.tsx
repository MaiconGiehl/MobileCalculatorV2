import React, { useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import { keysStyles } from "../assets/styles/keys.style";

export function CalculadoraKeys() {
  const [digitos, onChangeDigitos] = useState("");
  const [expressao, onChangeExpressao] = useState("");
  const [resultados, onChangeResultados] = useState("");

  const digito = (valor: number) => {
    const novoValor = digitos.concat(String(valor));
    onChangeDigitos(novoValor);
  };

  const resultado = (valores: string, expressao: string) => {
    let result: string = String(
      parseFloat(`${valores} ${expressao} ${valores}`)
    );
    onChangeResultados(result);
    console.log(resultados);
  };

  return (
    <View>
      <View style={keysStyles.rowKeys}>
        <TouchableHighlight style={keysStyles.columnKey}>
          <Text style={keysStyles.keyText}>CE</Text>
        </TouchableHighlight>

        <TouchableHighlight style={keysStyles.columnKey}>
          <Text style={keysStyles.keyText}>C</Text>
        </TouchableHighlight>

        <TouchableHighlight style={keysStyles.columnKey}>
          <Image
            source={require("../assets/backspace.png")}
            style={keysStyles.backspace}
          ></Image>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => onChangeExpressao("/")}
        >
          <Text style={keysStyles.keyText}>/</Text>
        </TouchableHighlight>
      </View>
      <View style={keysStyles.rowKeys}>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => digito(7)}
        >
          <Text style={keysStyles.keyText}>7</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => digito(8)}
        >
          <Text style={keysStyles.keyText}>8</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => digito(9)}
        >
          <Text style={keysStyles.keyText}>9</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => onChangeExpressao("*")}
        >
          <Text style={keysStyles.keyText}>X</Text>
        </TouchableHighlight>
      </View>
      <View style={keysStyles.rowKeys}>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => digito(4)}
        >
          <Text style={keysStyles.keyText}>4</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => digito(5)}
        >
          <Text style={keysStyles.keyText}>5</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => digito(6)}
        >
          <Text style={keysStyles.keyText}>6</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => onChangeExpressao("-")}
        >
          <Text style={keysStyles.keyText}>-</Text>
        </TouchableHighlight>
      </View>
      <View style={keysStyles.rowKeys}>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => digito(1)}
        >
          <Text style={keysStyles.keyText}>1</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => digito(2)}
        >
          <Text style={keysStyles.keyText}>2</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => digito(3)}
        >
          <Text style={keysStyles.keyText}>3</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => onChangeExpressao("+")}
        >
          <Text style={keysStyles.keyText}>+</Text>
        </TouchableHighlight>
      </View>
      <View style={keysStyles.rowKeys}>
        <TouchableHighlight style={keysStyles.columnKey}>
          <Text style={keysStyles.keyText}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => digito(0)}
        >
          <Text style={keysStyles.keyText}>0</Text>
        </TouchableHighlight>
        <TouchableHighlight style={keysStyles.columnKey}>
          <Text style={keysStyles.keyText}>,</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => resultado(digitos, expressao)}
        >
          <Text style={keysStyles.keyText}>=</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
