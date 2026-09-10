import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import Header from '../components/Header';
import Button from '../components/Button';
import { Routes } from '../navigation/Routes';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  console.log("email", email);
  
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
          onChangeText={value => setEmail(value)}
        />
        </View>
           <View style={styles.marginBottom24}>
        <Input
        value={email}
        secureTextEntry={true}
          label={'Password'}
          placeholder={'Enter Password'}
          onChangeText={value => setPassword(value)}
        />
        </View>
        <View style={styles.marginBottom24}>
            <Button title={'Login'} />
        </View>
        <Pressable onPress={()=> navigation.navigate(Routes.Register)} style={styles.registerationButton}>
            <Header  color={'#156CF7'} type={3} title={"Don't have an account?"} />
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
    justifyContent:'center'

  },
  secondContainer: {
    flexGrow:1,
    marginHorizontal: 24,
    justifyContent:'center'
  },
  marginBottom24: {
    marginBottom:24
  },
  button:{
    // marginHorizontal:24
  },
  registerationButton:{
    alignItems:'center'
  }
});
