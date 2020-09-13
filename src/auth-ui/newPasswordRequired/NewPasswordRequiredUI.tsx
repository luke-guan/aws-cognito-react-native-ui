import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    Button,
} from 'react-native';
import { styles } from '../stylesheet';

interface INewPasswordRequiredUI {
    onSubmit: ({ newPassword }: { newPassword: string }) => void;
    error: string | null;
}

function NewPasswordRequiredUI({ onSubmit, error }: INewPasswordRequiredUI) {
    const [newPassword, setNewPassword] = React.useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Text>{error}</Text>
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
                    onSubmit({ newPassword });
                }}
            />
        </KeyboardAvoidingView>
    );
}

export default NewPasswordRequiredUI;
