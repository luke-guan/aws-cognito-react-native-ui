import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';
import { useAuthDispatch, Estatus } from 'aws-cognito-core-ui';
import { styles } from '../stylesheet';

interface IForgotPasswordUI {
    onSubmit: ({ user }: { user: string }) => void;
    error: string | null;
}

function ForgetPasswordUI({ onSubmit, error }: IForgotPasswordUI) {
    const [user, setUser] = React.useState('');

    const dispatch = useAuthDispatch();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Text>{error}</Text>
            <TextInput
                onChangeText={setUser}
                value={user}
                placeholder="username"
                style={styles.textinput}
            />
            <Button
                title="submit"
                onPress={() => {
                    onSubmit({ user });
                }}
            />
            <View style={styles.hr} />
            <Button
                title="Sign In"
                onPress={() => {
                    dispatch({ type: Estatus.SIGNIN });
                }}
            />
        </KeyboardAvoidingView>
    );
}

export default ForgetPasswordUI;
