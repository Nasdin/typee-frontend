// screens/GalleryScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getGalleryWords } from '../api';

const GalleryScreen = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const fetchWords = async () => {
      const response = await getGalleryWords();
      setWords(response.words);
    };
    fetchWords();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.wordContainer}>
      <Text style={styles.word}>{item.word}</Text>
      <Text>{item.explanation}</Text>
      <Text>{item.story}</Text>
      <Text>{item.fact}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={words}
        renderItem={renderItem}
        keyExtractor={(item) => item.word}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  wordContainer: {
    marginBottom: 20,
  },
  word: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default GalleryScreen;
