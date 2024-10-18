import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CalcKeyboard from './src/components/CalcKeyboard';
import Display from './src/components/Display';



export default function App() {
  const [firstValue, setFirstValue] = useState('');
  const [operator, setOperator] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [clearLabel, setClearLabel] = useState('AC');

  const onKeyPress = key => {
    switch (key) {
      case 'AC':
        setFirstValue('');
        setOperator('');
        setSecondValue('');
        break;

      case 'C':
        if (secondValue !== '') {
          setSecondValue('');
        } else {
          setFirstValue('');
        }

        setClearLabel('AC');
        break;

      case '+/-':
        if (firstValue !== '' || secondValue !== '') {
          if (firstValue !== '' && secondValue === '') {
            setFirstValue(parseFloat((firstValue * -1)).toString());
          } else {
            setSecondValue(parseFloat((secondValue * -1)).toString());
          }
        }
        break;

      case '%':
        calculate(firstValue, key, secondValue);
        break;

      case '/':
      case 'x':
      case '-':
      case '+':
        if (secondValue !== '') {
          calculate(firstValue, operator, secondValue);
        } else {
          setOperator(key);
        }
        break;

      case '=':
        calculate(firstValue, operator, secondValue);
        break;

      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case ',':
        setClearLabel('C');
        if (operator === '') {
          setFirstValue(e => `${e}${key}`);
        } else {
          setSecondValue(e => `${e}${key}`);
        }
        break;
    }
  }

  const getDisplayText = () => {
    if (secondValue !== '')
      return secondValue;

    if (firstValue === '')
      return '0';

    return firstValue;
  }

  const calculate = (a = '', o = '', b = '') => {
    let result = 0

    a = a.replace(',', '.');
    b = b.replace(',', '.');

    switch (o) {
      case '%':
        result = parseFloat(a) / 100;
        break;
      case '/':
        result = parseFloat(a) / parseFloat(b);
        break;
      case 'x':
        result = parseFloat(a) * parseFloat(b);
        break;
      case '-':
        result = parseFloat(a) - parseFloat(b);
        break;
      case '+':
        result = parseFloat(a) + parseFloat(b);
        break;
    }

    if (result % 1 !== 0) {
      const digitsValue = result.toString().split('.')[1]

      if (digitsValue.length > 6) {
        result = result.toFixed(6)
      }
    }

    result = result.toString().replace('.', ',')

    setFirstValue(result);
    setOperator('');
    setSecondValue('');
  }

  return (
    <View style={styles.container}>
      <Display value={getDisplayText()} />
      <CalcKeyboard onKeyPress={onKeyPress} clearLabel={clearLabel} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'flex-end',
  },
})
