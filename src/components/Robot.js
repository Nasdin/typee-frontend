import React from 'react';
import Svg, { Circle, Rect, Path } from 'react-native-svg';

const Robot = () => {
  return (
    <Svg height="200" width="200">
      {/* Head */}
      <Circle cx="100" cy="50" r="50" fill="#9c9c9c" />
      {/* Eyes */}
      <Circle cx="70" cy="40" r="10" fill="#ffffff" />
      <Circle cx="130" cy="40" r="10" fill="#ffffff" />
      {/* Body */}
      <Rect x="50" y="100" width="100" height="80" fill="#9c9c9c" />
      {/* Arms */}
      <Path d="M50,100 L10,130 L50,130 Z" fill="#9c9c9c" />
      <Path d="M150,100 L190,130 L150,130 Z" fill="#9c9c9c" />
      {/* Lever */}
      <Rect x="90" y="130" width="20" height="40" fill="#9c9c9c" />
    </Svg>
  );
};

export default Robot;