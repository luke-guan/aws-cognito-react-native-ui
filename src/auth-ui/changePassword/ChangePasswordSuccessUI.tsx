import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuthDispatch, Estatus } from 'aws-cognito-core-ui';
import { styles } from '../stylesheet';

function ChangePasswordSuccessUI() {
    const dispatch = useAuthDispatch();
    return (
        <View style={styles.container}>
            <Text>Password Changed Successfully!</Text>
            <Button
                title="Done"
                onPress={() => {
                    dispatch({ type: Estatus.COMPLETED });
                }}
            />
        </View>
    );
}

export default ChangePasswordSuccessUI;
