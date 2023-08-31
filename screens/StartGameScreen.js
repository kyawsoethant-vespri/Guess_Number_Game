import {React, useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import Colors from '../constants/colors';
import PrimaryButton from '../components/game/ui/PrimaryButton';
import Title from '../components/game/ui/Title';
import Card from '../components/game/ui/Card';
import InstructionText from '../components/game/ui/InstructionText';

const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = enteredText => {
    setEnteredNumber(enteredText);
    // console.log('Entered Text', enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 and 99.',
        [{text: 'Yes', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    // console.log('Valid Number');
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  // inputContainer: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 16,
  //   marginTop: 36,
  //   marginHorizontal: 24,
  //   backgroundColor: Colors.primary600,
  //   borderRadius: 8,
  //   elevation: 4,
  // },
  // instructionText: {
  //   color: Colors.primary500,
  //   fontSize: 24,
  // },
  numberInput: {
    height: 55,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 2,
    color: Colors.primary500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
