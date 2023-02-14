import { useState } from 'react';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { assets } from '../assets/assets';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { sha256 } from 'react-native-sha256';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation, onChangeToken }) => {
  console.log(onChangeToken)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = async () => {
    try {
      const encrPassword = await sha256(password);
      const res = await fetch(
        'http://192.168.100.103:85/ana/iReport/public/user/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            utilizator: email,
            parola: encrPassword,
          }),
        },
      );
      const response = await res.json();
      console.log(response);
      if (response.status === 0) {
        const session = await AsyncStorage.setItem('session', response.session);
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('lastName', response.nume);
        await AsyncStorage.setItem('firstName', response.prenume);
        await AsyncStorage.setItem('phone', response.telefon);
        onChangeToken(session);
        // Toast.show({
        //   type: 'success',
        //   text1: response.mesaj,
        //   visibilityTime: 1500,
        //   onHide: () => {
        //     navigation.navigate('BottomNav');
        //   },
        // });
      } else if (response.status === 2) {
        Toast.show({
          type: 'success',
          text1: response.mesaj,
          text2: 'Vei fi redirecționat',
          visibilityTime: 2000,
          onHide: () => {
            navigation.navigate('ChangePasswordScreen', {
              email,
              password,
            });
          },
        });
      } else {
        Toast.show({
          type: 'error',
          text1: response.mesaj,
        });
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Încearcă mai târziu',
      });
    }
  };

  return (
    <View style={styles.login}>
      <View style={styles.inputView}>
        <View style={styles.absoluteLeft}>
          <Image source={assets.emailIcon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Adresă E-mail"
          placeholderTextColor="#A6B4BC"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputView}>
        <View style={styles.absoluteLeft}>
          <Image source={assets.passwordIcon} />
        </View>
        <TextInput
          style={styles.input}
          secureTextEntry={showPassword}
          placeholder="Parolă"
          placeholderTextColor="#A6B4BC"
          value={password}
          onChangeText={setPassword}
        />
        <Pressable
          style={styles.absoluteRight}
          onPress={() => setShowPassword(!showPassword)}>
          <Image source={assets.visibilityIcon} />
        </Pressable>
      </View>
      <Text
        style={styles.forgot}
        onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        Ai uitat parola?
      </Text>
      <Button title="Intră" color="#51A4D4" onPress={handleLogin} />
      <View style={styles.register}>
        <Text>Nu ai cont?</Text>
        <Text
          style={styles.blue}
          onPress={() => navigation.navigate('RegisterScreen')}>
          Înregistrează-te acum
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    width: '75%',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputView: {
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#A6B4BC',
    borderBottomWidth: 1,
    borderBottomColor: '#A6B4BC',
  },
  input: {
    marginHorizontal: '15%',
    fontSize: 16,
    color: '#A6B4BC',
    width: '70%',
  },
  absoluteLeft: {
    position: 'absolute',
    left: 0,
    alignItems: 'center',
    width: '10%',
  },
  absoluteRight: {
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    width: '10%',
  },
  forgot: {
    marginTop: 12,
    marginBottom: 48,
    fontSize: 11,
    color: '#51A4D4',
    fontStyle: 'italic',
  },
  register: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  blue: {
    color: '#51A4D4',
    textDecorationLine: 'underline',
  },
});

export default Login;
