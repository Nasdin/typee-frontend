import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Image, View } from 'react-native';

const Gallery = ({ navigation, galleryItems }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={galleryItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});

export default Gallery;