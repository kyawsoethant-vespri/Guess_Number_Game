import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../../constants/colors';

const Card = ({children}) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 34,
    marginHorizontal: 24,
    backgroundColor: Colors.primary600,
    borderRadius: 8,
    elevation: 4,
  },
});
