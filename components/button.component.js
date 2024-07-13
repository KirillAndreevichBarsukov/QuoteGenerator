import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import styles from '../styles/styles';

export const Button = (props) => {
  const { title, onPress } = props;

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};
