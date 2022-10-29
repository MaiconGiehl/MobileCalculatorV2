import React, { useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import { keysStyles } from "../assets/styles/keys.style";

export function CalculadoraKeys() {
  const [digitos, onChangeDigitos] = useState([""]);
  const [expressao, onChangeExpressao] = useState("");
  const [result, onChangeResult] = useState('');
  const [floated, onChangeFloat] = useState(false)


  // const textHeader = () => {
  //   const txtH = document.getElem

  // }

  const digito = (valor: number) => {
    if (!expressao) {
      const novoValor = digitos[0].concat(String(valor));
      onChangeDigitos([novoValor]);
      console.log([novoValor]);
    } else {
      if (!digitos[1]) {
        digitos[1] = "";
      }
      digitos[1] = digitos[1].concat(String(valor));
      onChangeDigitos(digitos);
      console.log(digitos);
    }
  };

  const expression = (exp: string) => {
    if (digitos[0] == '') {
      return
    }
    if (!expressao) {
      onChangeExpressao(exp);
      onChangeFloat(false)
    }
    console.log(digitos);
  };

  const limpar = () => {
    onChangeDigitos([""]);
    onChangeExpressao("");
    onChangeFloat(false)
  };

  const apagar = () => {
    if (!expressao) {
      digitos[0] = digitos[0].substring(0, digitos[0].length - 1);
    } else {
      digitos[1] = digitos[1].substring(0, digitos[1].length - 1);
    }

    onChangeDigitos(digitos);
  };

  const zerar = () => {
    if (!expressao) {
      digitos[0] = "";
    } else {
      digitos[1] = "";
    }    
    onChangeDigitos(digitos);
    onChangeFloat(false)
  };

  const addFloatPoint = (dot: string) => {
    if (floated == true) {
      return
    }
    else {
      onChangeFloat(true)
      if (!expressao) {

        digitos[0] = digitos[0].concat(String(dot));
      
      } else {
        digitos[1] = digitos[1].concat(String(dot));
      }
      onChangeDigitos(digitos)
      return
    }
  }

  const moreOrLess = () => {
    if (!expressao) {
      const novoValor = String(Number(digitos[0]) * -1);
      onChangeDigitos([novoValor]);
      console.log('novoValor', novoValor);
    }
    else {
      digitos[1] = String(Number(digitos[1]) * -1);
      onChangeDigitos(digitos);
      console.log('digitos', digitos);
    }
  }

  const calcular = () => {
    let resultado: any;
    switch (expressao) {
      case "/":
        resultado = Number(digitos[0]) / Number(digitos[1]);
        break;
      case "x":
        resultado = Number(digitos[0]) * Number(digitos[1]);
        break;
      case "-":
        resultado = Number(digitos[0]) - Number(digitos[1]);
        break;
      case "+":
        resultado = Number(digitos[0]) + Number(digitos[1]);
        break;
    }
    limpar();
    onChangeResult(resultado);
    console.log(resultado);
  };

  
  return (
    <View>
      <View style={keysStyles.rowKeys}>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => zerar()}
        >
          <Text style={keysStyles.keyText}>CE</Text>
        </TouchableHighlight>

        <TouchableHighlight style={keysStyles.columnKey}>
          <Text style={keysStyles.keyText}>C</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => apagar()}
        >
          <Image
            source={require("../assets/backspace.png")}
            style={keysStyles.backspace}
          ></Image>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => expression("/")}
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
          onPress={() => expression("x")}
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
          onPress={() => expression("-")}
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
          onPress={() => expression("+")}
        >
          <Text style={keysStyles.keyText}>+</Text>
        </TouchableHighlight>
      </View>
      <View style={keysStyles.rowKeys}>
        <TouchableHighlight style={keysStyles.columnKey}
        onPress={() => moreOrLess()}>
          <Text style={keysStyles.keyText}>+/-</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => digito(0)}
        >
          <Text style={keysStyles.keyText}>0</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={keysStyles.columnKey}
          onPress={() => addFloatPoint('.')}
        >
          <Text style={keysStyles.keyText}>,</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={keysStyles.columnKey}
          onPress={() => calcular()}
        >
          <Text style={keysStyles.keyText}>=</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
