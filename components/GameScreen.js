import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import OnScreenKeyboard from './OnScreenKeyboard';
import Robot from './Robot';
import WordDisplay from './WordDisplay';
import { getWordData } from '../api/wordsApi';

const GameScreen = ({ navigation }) => {
  const [pressedKey, setPressedKey] = useState('');
  const [word, setWord] = useState('');
  const [wordData, setWordData] = useState({});

  const handleKeyPress = async (key) => {
    setPressedKey(key);
    setWord(word + key);

    try {
      const data = await getWordData(word + key);
      if (data) {
        setWordData(data);
      }
    } catch (error) {
      console.error('Error fetching word data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Robot pressedKey={pressedKey} />
      <OnScreenKeyboard onKeyPress={handleKeyPress} />
      <WordDisplay
        imageUrl={wordData.imageUrl}
        explanation={wordData.explanation}
        story={wordData.story}
        fact={wordData.fact}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default GameScreen;