import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../stylesheet';

function LoadingUI() {
    return (
        <View style={styles.container}>
            <Text>Loading</Text>
        </View>
    );
}

export default LoadingUI;
