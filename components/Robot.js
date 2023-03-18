import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Robot = ({ pressedKey }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.robotText}>{pressedKey || 'Robot is waiting...'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  robotText: {
    fontSize: 24,
  },
});

export default Robot;