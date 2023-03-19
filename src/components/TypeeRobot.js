import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Robot = () => {
  const [leftHandPosition, setLeftHandPosition] = useState({ x: 0, y: 0 });
  const [rightHandPosition, setRightHandPosition] = useState({ x: 0, y: 0 });

  const handleKeyPress = (key) => {
    // Calculate the coordinates of the key on screen
    const keyCoordinates = calculateKeyCoordinates(key);

    // Calculate the distance between each hand and the key
    const leftHandDistance = calculateDistance(leftHandPosition, keyCoordinates);
    const rightHandDistance = calculateDistance(rightHandPosition, keyCoordinates);

    // Move the closest hand to the key
    if (leftHandDistance <= rightHandDistance) {
      setLeftHandPosition(keyCoordinates);
    } else {
      setRightHandPosition(keyCoordinates);
    }
  };

  return (
    <View style={styles.robotContainer}>
      <View
        style={[styles.hand, { left: leftHandPosition.x, top: leftHandPosition.y }]}
      />
      <View
        style={[styles.hand, { right: rightHandPosition.x, top: rightHandPosition.y }]}
      />
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
    position: 'relative',
  },
  robotImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  hand: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
});

export default Robot;
