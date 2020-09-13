import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    Button,
    TextInput,
} from 'react-native';
import { useAuthDispatch, Estatus } from 'aws-cognito-core-ui';
import { styles } from '../stylesheet';

interface IChangePasswordUI {
    onSubmit: ({
        oldPassword,
        newPassword,
    }: {
        oldPassword: string;
        newPassword: string;
    }) => void;
    error: string | null;
}

function ChangePasswordUI({ onSubmit, error }: IChangePasswordUI) {
    const [oldPassword, setOldPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');

    const dispatch = useAuthDispatch();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Text>{error}</Text>
            <TextInput
                secureTextEntry={true}
                textContentType="password"
                onChangeText={setOldPassword}
                value={oldPassword}
                placeholder="oldPassword"
                style={styles.textinput}
            />
            <TextInput
                secureTextEntry={true}
                textContentType="password"
                onChangeText={setNewPassword}
                value={newPassword}
                placeholder="new password"
                style={styles.textinput}
            />
            <Button
                title="Change Password"
                onPress={() => onSubmit({ oldPassword, newPassword })}
            />
            <Button
                title="Cancel"
                onPress={() => dispatch({ type: Estatus.COMPLETED })}
            />
        </KeyboardAvoidingView>
    );
}

export default ChangePasswordUI;
