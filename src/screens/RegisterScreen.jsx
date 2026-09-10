import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import Header from '../components/Header';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import { createUser } from '../api/User';
import Toast from 'react-native-toast-message'

const RegisterScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log('email', email);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.backButton}>
                <BackButton onPress={() => navigation.goBack()} />
            </View>
            <ScrollView contentContainerStyle={styles.secondContainer}>
                <View style={styles.marginBottom24}>
                    <Header title={'Hello and Welcome! '} type={1} />
                </View>
                <View style={styles.marginBottom24}>
                    <Input
                        value={fullName}
                        label={'First & Last Name'}
                        placeholder={'Enter your full name'}
                        onChangeText={value => setFullName(value)}
                    />
                </View>
                <View style={styles.marginBottom24}>
                    <Input
                        value={email}
                        label={'Email'}
                        keyboardType={'email-address'}
                        placeholder={'Enter Email'}
                        onChangeText={value => setEmail(value.toLowerCase())}
                    />
                </View>
                <View style={styles.marginBottom24}>
                    <Input
                        value={password}
                        secureTextEntry={true}
                        label={'Password'}
                        placeholder={'Enter Password'}
                        onChangeText={value => setPassword(value)}
                        showPasswordToggle={true}
                    />
                </View>
                <View style={styles.marginBottom24}>
                    <Button
                        isDisabled={
                            fullName.length <= 2 || email.length <= 5 || password.length <= 6
                        }
                        title={'Register'}
                        onPress={async () => {
                            let user = await createUser(fullName, email, password);
                            if (user.error) {
                                Toast.show({
                                    type: 'error',
                                    text1: user.error
                                })
                            } else {
                                Toast.show({
                                    type: 'success',
                                    text1: 'Registration Successful',
                                    text2: 'Your account has been created.',
                                })
                                setTimeout(() => navigation.goBack(), 2000)
                            }
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    backButton: {
        marginLeft: 14,
        marginTop: 7,
    },
    secondContainer: {
        flexGrow: 1,
        marginHorizontal: 24,
        justifyContent: 'center',
    },
    marginBottom24: {
        marginBottom: 24,
    },
});
