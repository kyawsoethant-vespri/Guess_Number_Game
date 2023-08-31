import React from 'react';
import Title from '../components/game/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/game/ui/PrimaryButton';
const {View, Image, StyleSheet, Text} = require('react-native');

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title style={styles.instructionTitle}>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionTitle: {
    color: 'red',
    borderColor: Colors.primary500,
    borderWidth: 3,
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.accent600,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 29,
    fontWeight: 'bold',
  },
  highlight: {
    color: Colors.accent800,
    fontWeight: 'bold',
  },
});
