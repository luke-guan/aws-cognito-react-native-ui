import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../stylesheet';

interface IErrorUI {
    error: string;
}

function ErrorMsgUI({ error }: IErrorUI) {
    return (
        <View style={styles.container}>
            <Text>Error: {error}</Text>
        </View>
    );
}

export default ErrorMsgUI;
