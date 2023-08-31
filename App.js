import {React, useState} from 'react';
import StartGameScreen from './screens/StartGameScreen';
import {ImageBackground, StyleSheet, View, Dimensions} from 'react-native';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRound, setGuessRound] = useState(0);

  const pickNumberHandler = pickedNumber => {
    setUserNumber(pickedNumber);
    // setGameIsOver(false);
  };

  const gameOverHandler = guessRoundLengths => {
    setGameIsOver(true);
    setGuessRound(guessRoundLengths);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRound(0);
    setGameIsOver(false);
  };

  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRound}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/wall.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        {screen}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#7f0a8d',
  },
  backgroundImage: {
    opacity: 0.85,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
