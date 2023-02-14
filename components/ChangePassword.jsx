import { useState, useEffect } from 'react';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { checkPassword } from '../utils/validation';
import { assets } from '../assets/assets';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { sha256 } from 'react-native-sha256';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangePassword = ({ navigation, email, password, onTokenChange }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleChangePassword = async () => {
    try {
      if (newPassword !== confirmNewPassword) {
        Toast.show({
          type: 'error',
          text1: 'Parolele nu coincid',
        });
      } else if (!checkPassword(newPassword)) {
        Toast.show({
          type: 'error',
          text1: 'Parola trebuie sa conțină cel puțin 8 caractere',
          text2: 'minuscule, majuscule și cifre',
        });
      } else {
        const encrPassword = await sha256(password);
        const encrNewPassword = await sha256(newPassword);
        const res = await fetch(
          `http://192.168.100.103:85/ana/iReport/public/user/schimbare-parola`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              utilizator: email,
              parola: encrPassword,
              parolaNoua: encrNewPassword,
            }),
          },
        );
        const response = await res.json();
        if (response.status === 0) {
          const session = await AsyncStorage.setItem(
            'session',
            response.session,
          );
          await AsyncStorage.setItem('email', email);
          await AsyncStorage.setItem('lastName', response.nume);
          await AsyncStorage.setItem('firstName', response.prenume);
          await AsyncStorage.setItem('phone', response.telefon);
          onTokenChange(session);
          Toast.show({
            type: 'success',
            text1: 'Parola a fost schimbată cu succes',
            onHide: () => {
              navigation.navigate('BottomNav');
            },
          });
        }
      }
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: err.message,
      });
    }
  };

  useEffect(() => {
    Toast.show({
      type: 'info',
      text1: 'Alege o parolă nouă',
      visibilityTime: 4000,
    });
  }, []);

  return (
    <View style={styles.login}>
      <View>
        <View style={styles.inputView}>
          <View style={styles.absoluteLeft}>
            <Image source={assets.passwordIcon} />
          </View>
          <TextInput
            style={styles.input}
            secureTextEntry={showNewPassword}
            placeholder="Parolă nouă"
            placeholderTextColor="#A6B4BC"
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <Pressable
            style={styles.absoluteRight}
            onPress={() => setShowNewPassword(!showNewPassword)}>
            <Image source={assets.visibilityIcon} />
          </Pressable>
        </View>
        <View style={styles.inputView}>
          <View style={styles.absoluteLeft}>
            <Image source={assets.passwordIcon} />
          </View>
          <TextInput
            style={styles.input}
            secureTextEntry={showConfirmPassword}
            placeholder="Confirmare parolă"
            placeholderTextColor="#A6B4BC"
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
          />
          <Pressable
            style={styles.absoluteRight}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Image source={assets.visibilityIcon} />
          </Pressable>
        </View>
      </View>

      <Button title="Salvare" color="#51A4D4" onPress={handleChangePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    width: '75%',
    height: '40%',
    justifyContent: 'space-around',
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
});

export default ChangePassword;
