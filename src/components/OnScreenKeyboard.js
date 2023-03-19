import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toUpperCase().split('');

const OnScreenKeyboard = ({ onPress }) => {
  const [pressedKey, setPressedKey] = useState(null);

  return (
    <View style={styles.keyboardContainer}>
      {keys.map((key) => (
        <TouchableOpacity
          key={key}
          style={[
            styles.keyButton,
            pressedKey === key ? styles.keyButtonPressed : null,
          ]}
          onPress={() => {
            setPressedKey(key);
            onPress(key);
          }}
          onLongPress={() => setPressedKey(null)}
          delayLongPress={200}
        >
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
  keyButtonPressed: {
    backgroundColor: '#2b2d42',
  },
  keyText: {
    fontSize: 18,
    color: 'white',
  },
});

export default OnScreenKeyboard;
