import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const WordDisplay = ({ imageUrl, explanation, story, fact }) => {
  return (
    <View style={styles.container}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <Text style={styles.text}>{explanation}</Text>
      <Text style={styles.text}>{story}</Text>
      <Text style={styles.text}>{fact}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default WordDisplay;