import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';

const keyboardKeys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const OnScreenKeyboard = ({ onKeyPress }) => {
  return (
    <View style={styles.container}>
      {keyboardKeys.split('').map((key, index) => (
        <TouchableOpacity key={index} onPress={() => onKeyPress(key)}>
          <Button title={key} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default OnScreenKeyboard;