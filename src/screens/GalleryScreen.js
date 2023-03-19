import React, { useState, useEffect } from "react";
import { getGalleryWords } from "../api";
import WordCard from "../components/WordCard";

function GalleryScreen() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const fetchGalleryWords = async () => {
      const galleryWords = await getGalleryWords();
      setWords(galleryWords);
    };
    fetchGalleryWords();
  }, []);

  return (
    <div className="gallery-screen">
      <h1>Word Gallery</h1>
      <div className="word-gallery">
        {words.map((word) => (
          <WordCard key={word.id} word={word} />
        ))}
      </div>
    </div>
  );
}

export default GalleryScreen;
