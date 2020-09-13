import React from 'react';
import {
    Linking,
    Clipboard,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    Button,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { styles } from '../stylesheet';

interface IMfaSetupUI {
    onSubmit: ({ challengeAnswer }: { challengeAnswer: string }) => void;
    rawCode: string;
    code: string;
    error: string | null;
}

function MfaSetupUI({ onSubmit, rawCode, code, error }: IMfaSetupUI) {
    const [challengeAnswer, setChallengeAnswer] = React.useState('');

    async function OpenW2FA() {
        await Linking.openURL(code);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Text>{error}</Text>
            <Button
                title="Copy QRCode"
                onPress={() => {
                    Clipboard.setString(rawCode);
                }}
            />
            <Button
                title="Open with 2FA"
                onPress={() => {
                    OpenW2FA();
                }}
            />
            <QRCode value={code} />
            <TextInput
                keyboardType="number-pad"
                onChangeText={setChallengeAnswer}
                value={challengeAnswer}
                placeholder="challengeAnswer"
                style={styles.textinput}
            />
            <Button
                title="submit"
                onPress={() => {
                    onSubmit({ challengeAnswer });
                }}
            />
        </KeyboardAvoidingView>
    );
}

export default MfaSetupUI;
