import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const GalleryCard = ({ word, imageUrl, explanation, fact, story }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.wordText}>{word}</Text>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.explanationText}>Explanation: {explanation}</Text>
      <Text style={styles.factText}>Fact: {fact}</Text>
      <Text style={styles.storyText}>Story: {story}</Text>
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
  wordText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 10,
  },
  explanationText: {
    fontSize: 16,
    marginBottom: 5,
  },
  factText: {
    fontSize: 16,
    marginBottom: 5,
  },
  storyText: {
    fontSize: 16,
  },
});

export default GalleryCard;
