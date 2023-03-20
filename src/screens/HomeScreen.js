import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OnScreenKeyboard from '../components/OnScreenKeyboard';
import TypeeRobot from '../components/TypeeRobot';
import { isWordSafe, getKidWordEncyclopedia } from '../api';
import isEnglishWord from '../helpers/inEnglishWord';

const HomeScreen = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [wordInfo, setWordInfo] = useState(null);

  useEffect(() => {
    const fetchWordInfo = async () => {
      if (currentWord.length > 0 && isEnglishWord(currentWord)) {
        const isSafe = await isWordSafe(currentWord);
        if (isSafe) {
          const info = await getKidWordEncyclopedia(currentWord);
          setWordInfo(info);
        }
      }
    };
    fetchWordInfo();
  }, [currentWord]);

  const handleKeyPress = (key) => {
    setCurrentWord((prevWord) => prevWord + key);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSidebar}>
        {/* Display word information */}
        {wordInfo && (
          <>
            <Text style={styles.wordInfoTitle}>{currentWord}</Text>
            <Text>{wordInfo.explanation}</Text>
            <Text>{wordInfo.story}</Text>
            <Text>{wordInfo.fact}</Text>
          </>
        )}
      </View>
      <TypeeRobot />
      <OnScreenKeyboard onPress={handleKeyPress} />
      <View style={styles.rightSidebar}>
        {/* Display image */}
        {wordInfo && (
          <img src={wordInfo.imageUrl} alt={currentWord} style={styles.wordImage} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSidebar: {
    flex: 1,
    padding: 20,
  },
  rightSidebar: {
    flex: 1,
    padding: 20,
  },
  wordInfoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  wordImage: {
    width: '100%',
    height: 'auto',
  },
});

export default HomeScreen;
