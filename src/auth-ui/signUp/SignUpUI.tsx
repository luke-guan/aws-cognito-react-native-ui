// TODO write a verify phoneNumber
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

interface ISignUpUI {
    onSubmit: ({
        username,
        password,
    }: {
        username: string;
        password: string;
        email?: string;
        phoneNumber?: string;
    }) => void;
    error: string | null;
}

function SignUpUI({ onSubmit, error }: ISignUpUI) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');

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
            <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder="email"
                style={styles.textinput}
            />
            <Text>phone number +11231231234</Text>
            <TextInput
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                placeholder="phoneNumber"
                style={styles.textinput}
            />
            <Button
                title="Sign Up"
                onPress={() => {
                    onSubmit({
                        username,
                        password,
                        email,
                        phoneNumber,
                    });
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

export default SignUpUI;
