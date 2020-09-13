import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    View,
    Text,
    Button,
    TextInput,
} from 'react-native';
import { useAuthDispatch, Estatus } from 'aws-cognito-core-ui';
import { styles } from '../stylesheet';

interface ISignInUI {
    onSubmit: ({
        username,
        password,
    }: {
        username: string;
        password: string;
    }) => void;
    error: string | null;
}

function SignInUI({ onSubmit, error }: ISignInUI) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const dispatch = useAuthDispatch();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Text>{error}</Text>
            <TextInput
                onChangeText={setUsername}
                value={username}
                placeholder="username"
                style={styles.textinput}
            />
            <TextInput
                secureTextEntry={true}
                textContentType="password"
                onChangeText={setPassword}
                value={password}
                placeholder="password"
                style={styles.textinput}
            />
            <Button
                title="Sign In"
                onPress={() => {
                    onSubmit({ username, password });
                }}
            />
            <View style={styles.hr} />
            <Button
                title="Sign Up"
                onPress={() => {
                    dispatch({ type: Estatus.SIGNUP });
                }}
            />
            <Button
                title="Forgot Password"
                onPress={() => {
                    dispatch({ type: Estatus.FORGOTPASSWORD });
                }}
            />
        </KeyboardAvoidingView>
    );
}

export default SignInUI;

// {"code":"NotAuthorizedException","name":"NotAuthorizedException","message":"Incorrect username or password."}
