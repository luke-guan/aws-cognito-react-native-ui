import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../stylesheet';

interface ISignOut {
    onSubmit: ({ global }: { global?: boolean }) => Promise<void>;
    error: string | null;
}

function SignOutUI({ onSubmit, error }: ISignOut) {
    return (
        <View style={styles.container}>
            <Text>{error}</Text>
            <Button
                title="Sign Out"
                onPress={() => {
                    onSubmit({});
                }}
            />
        </View>
    );
}

export default SignOutUI;
