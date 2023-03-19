import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const TypeeRobot = () => {
  return (
    <View style={styles.robotContainer}>
      <Image
        source={require('../assets/typee_robot.png')}
        style={styles.robotImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  robotContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  robotImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default TypeeRobot;
