import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WordCard = ({ word, isSafe }) => {
  const cardStyle = isSafe ? styles.safeCard : styles.unsafeCard;

  return (
    <View style={[styles.cardContainer, cardStyle]}>
      <Text style={styles.wordText}>{word}</Text>
      <Text style={styles.safetyText}>{isSafe ? 'Safe' : 'Unsafe'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  safeCard: {
    backgroundColor: '#b0f2b6',
  },
  unsafeCard: {
    backgroundColor: '#f28b82',
  },
  wordText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  safetyText: {
    fontSize: 16,
  },
});

export default WordCard;
