import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const keys = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

const OnScreenKeyboard = ({ onPress }) => {
  return (
    <View style={styles.keyboardContainer}>
      {keys.map((key) => (
        <TouchableOpacity
          key={key}
          style={styles.keyButton}
          onPress={() => onPress(key)}>
          <Text style={styles.keyText}>{key}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  keyButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    backgroundColor: '#ccc',
  },
  keyText: {
    fontSize: 18,
  },
});

export default OnScreenKeyboard;
