import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    Button,
} from 'react-native';
import { styles } from '../stylesheet';

interface IConfirmSignUpUI {
    USER: string;
    onSubmit: ({ code }: { code: string }) => void;
    resendSignUp: () => void;
    error: string | null;
}

function ConfirmSignUpUI({
    USER,
    onSubmit,
    resendSignUp,
    error,
}: IConfirmSignUpUI) {
    const [code, setCode] = React.useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Text>{error}</Text>
            <Text>USER: {USER}</Text>
            <Button
                title="Resend Code"
                onPress={() => {
                    resendSignUp();
                }}
            />
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

export default ConfirmSignUpUI;
