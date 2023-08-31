import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../../../constants/colors';

const Title = ({children, style}) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent700,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.primary500,
    padding: 12,
  },
});
