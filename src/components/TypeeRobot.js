import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import OnScreenKeyboard from './OnScreenKeyboard';

const KEY_SIZE = 40; // The size of each key button in pixels
const KEY_SPACING = 5; // The spacing between each key button in pixels
const KEYBOARD_OFFSET = 50; // The distance between the top of the screen and the keyboard
const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LEFT_HAND_SIZE = 0.15 * Dimensions.get('window').width;
const RIGHT_HAND_SIZE = 0.15 * Dimensions.get('window').width;
const HEAD_SIZE = 60;
const BODY_SIZE = 80;

// Calculates the (x, y) coordinates of the given key on screen
const calculateKeyCoordinates = (key) => {
    const index = keys.indexOf(key);
    const x =
        (index % 10) * (KEY_SIZE + KEY_SPACING) + KEY_SPACING + KEY_SIZE / 2;
    const y =
        Math.floor(index / 10) * (KEY_SIZE + KEY_SPACING) +
        KEY_SPACING +
        KEY_SIZE / 2 +
        KEYBOARD_OFFSET;
    return {x, y};
};

// Calculates the Euclidean distance between two points
const calculateDistance = (point1, point2) => {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
};

// Sets the position of the left hand to the given (x, y) coordinates
const setLeftHand = ({x, y}) => {
  setLeftHandPosition({x: x - LEFT_HAND_SIZE / 2, y: y - LEFT_HAND_SIZE / 2});
};

// Sets the position of the right hand to the given (x, y) coordinates
const setRightHand = ({x, y}) => {
  setRightHandPosition({x: x - RIGHT_HAND_SIZE / 2, y: y - RIGHT_HAND_SIZE / 2});
};


// Sets the position of the left hand to the given (x, y) coordinates
const setLeftHandPosition = ({x, y}) => {
    setLeftHand({x: x - LEFT_HAND_SIZE / 2, y: y - LEFT_HAND_SIZE / 2});
};

// Sets the position of the right hand to the given (x, y) coordinates
const setRightHandPosition = ({x, y}) => {
    setRightHand({x: x - RIGHT_HAND_SIZE / 2, y: y - RIGHT_HAND_SIZE / 2});
};

const TypeeRobot = () => {
    const [leftHandPosition, setLeftHandPosition] = useState({x: 0, y: 0});
    const [rightHandPosition, setRightHandPosition] = useState({x: 0, y: 0});

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
                style={[
                    styles.leftHand,
                    {left: leftHandPosition.x, top: leftHandPosition.y, width: LEFT_HAND_SIZE, height: LEFT_HAND_SIZE},
                ]}
            />
            <View
                style={[
                    styles.rightHand,
                    {
                        right: rightHandPosition.x,
                        top: rightHandPosition.y,
                        width: RIGHT_HAND_SIZE * 1.2,
                        height: RIGHT_HAND_SIZE * 1.5
                    },
                ]}
            />
            <View style={styles.robotBody}>
                <View style={[styles.head, {width: HEAD_SIZE, height: HEAD_SIZE}]}>
                    <View style={styles.eye}/>
                    <View style={styles.eye}/>
                </View>
                <View style={[styles.body, {width: BODY_SIZE, height: BODY_SIZE}]}/>

            </View>
<OnScreenKeyboard onPress={handleKeyPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    robotContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        maxWidth: 400,
        maxHeight: 400,
    },
    leftHand: {
        position: 'absolute',
        width: 20,
        height: 50,
        backgroundColor: '#00bfff',
        transform: [{rotate: '-45deg'}],
        zIndex: 1,
    },
    rightHand: {
        position: 'absolute',
        width: 20,
        height: 50,
        backgroundColor: '#00bfff',
        transform: [{rotate: '45deg'}],
        zIndex: 1,
    },
    robotBody: {
        position: 'absolute',
        bottom: 0,
        left: '25%',
        right: '25%',
        height: '60%',
        backgroundColor: '#9c9c9c',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    head: {
        position: 'absolute',
        top: '-20%',
        width: '30%',
        height: '30%',
        borderRadius: '50%',
        backgroundColor: '#9c9c9c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    eye: {
        width: '20%',
        height: '20%',
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        margin: '2%',
    },
    body: {
        width: '80%',
        height: '80%',
        backgroundColor: '#ffffff',
        borderRadius: '50%',
    },
});


export default TypeeRobot;