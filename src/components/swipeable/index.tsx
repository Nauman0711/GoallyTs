import React, { useRef } from 'react';
import { PanResponder, Animated, ViewStyle } from 'react-native';

type SwipeableProps = {
    onSwipe: () => void;
    children: React.ReactNode;
    style?: ViewStyle
};

const Swipeable = ({ onSwipe, children, style }: SwipeableProps) => {
    const translateX = useRef<Animated.Value>(new Animated.Value(0)).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) => {
                // Return true if horizontal swipe detected, false otherwise
                return Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
            },
            onPanResponderMove: (_, gestureState) => {
                // Update translateX value with gesture movement
                translateX.setValue(gestureState.dx);
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx < -100) {
                    Animated.timing(translateX, {
                        toValue: -200,
                        duration: 200,
                        useNativeDriver: true,
                    }).start(() => {
                        onSwipe();
                        translateX.setValue(0);
                    });
                } else {
                    Animated.spring(translateX, {
                        toValue: 0,
                        useNativeDriver: true, // I was not using this so i was getting error so i use native driver for performance
                    }).start(() => {
                        translateX.setValue(0);
                    });
                }
            },
        })
    ).current;

    return (
        <Animated.View
            style={[{
                transform: [{ translateX: translateX }],
            }, style]}
            {...panResponder.panHandlers}>
            {children}
        </Animated.View>
    );
};

export default Swipeable;
