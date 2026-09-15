import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import Header from '../components/Header';
import Button from '../components/Button';
import { Routes } from '../navigation/Routes';
import { LoginUser } from '../api/User';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { login, resetToInitialState } from '../utils/redux/slices/User';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    // dispatch(resetToInitialState());


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.secondContainer}>
                <View style={styles.marginBottom24}>
                    <Header title={'Welcome Back'} type={1} />
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
                        showPasswordToggle
                    />
                </View>
                <View style={styles.marginBottom24}>
                    <Button
                        isDisabled={email.length <= 5 || password.length <= 6}
                        title={'Login'}
                        onPress={async () => {
                            let user = await LoginUser(email, password);
                            console.log('userLogin', user);
                            if (!user.status) {
                                Toast.show({
                                    type: 'error',
                                    text1: user.error,
                                });
                            } else {
                                Toast.show({
                                    type: 'success',
                                    text1: 'Login Successful',
                                });
                                // when the user login is succesfful, we will dispatch
                                // LoginIn func
                                dispatch(login(user.data))
                                navigation.navigate(Routes.Home);
                            }
                        }}
                    />
                </View>
                <Pressable
                    onPress={() => navigation.navigate(Routes.Register)}
                    style={styles.registerationButton}
                >
                    <Header color={'#156CF7'} type={3} title={"Don't have an account?"} />
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    secondContainer: {
        flexGrow: 1,
        marginHorizontal: 24,
        justifyContent: 'center',
    },
    marginBottom24: {
        marginBottom: 24,
    },
    button: {
        // marginHorizontal:24
    },
    registerationButton: {
        alignItems: 'center',
    },
});
