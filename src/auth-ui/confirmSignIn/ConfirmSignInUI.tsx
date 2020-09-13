import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    Button,
} from 'react-native';
import { styles } from '../stylesheet';

interface IConfirmSignInUI {
    onSubmit: ({ code }: { code: string }) => void;
    error: string | null;
}

function ConfirmSignInUI({ onSubmit, error }: IConfirmSignInUI) {
    const [code, setCode] = React.useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Text>{error}</Text>
            <TextInput
                keyboardType="number-pad"
                onChangeText={setCode}
                value={code}
                placeholder="code"
                style={styles.textinput}
            />
            <Button
                title="submit"
                onPress={() => {
                    onSubmit({ code });
                }}
            />
        </KeyboardAvoidingView>
    );
}

export default ConfirmSignInUI;
