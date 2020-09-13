import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    Button,
} from 'react-native';
import { styles } from '../stylesheet';

interface IForgotPasswordSubmitUI {
    onSubmit: ({
        code,
        newPassword,
    }: {
        code: string;
        newPassword: string;
    }) => void;
    username: string;
    error: string | null;
}

function ForgotPasswordSubmitUI({
    onSubmit,
    username,
    error,
}: IForgotPasswordSubmitUI) {
    const [code, setCode] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Text>{error}</Text>
            <Text>Username is {username}</Text>
            <TextInput
                keyboardType="number-pad"
                onChangeText={setCode}
                value={code}
                placeholder="code"
                style={styles.textinput}
            />
            <TextInput
                secureTextEntry={true}
                textContentType="password"
                onChangeText={setNewPassword}
                value={newPassword}
                placeholder="newPassword"
                style={styles.textinput}
            />
            <Button
                title="submit"
                onPress={() => {
                    onSubmit({ code, newPassword });
                }}
            />
        </KeyboardAvoidingView>
    );
}

export default ForgotPasswordSubmitUI;
