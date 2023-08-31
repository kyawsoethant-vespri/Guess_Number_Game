import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/colors';

const GuessLogItem = ({roundNumber, guess}) => {
  return (
    <View style={styles.listItems}>
      <Text style={styles.itemText}># {roundNumber}</Text>
      <Text style={styles.itemText}>
        Opponent's Guess <Text style={styles.itemNumber}> : {guess}</Text>{' '}
      </Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItems: {
    borderRadius: 40,
    padding: 12,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.primary600,
    elevation: 4,
    alignItems: 'center',
  },
  itemText: {
    color: Colors.accent700,
    fontWeight: '500',
  },
  itemNumber: {
    fontSize: 16,
    color: Colors.accent700,
    fontWeight: 'bold',
  },
});
