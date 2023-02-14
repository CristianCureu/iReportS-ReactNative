import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { checkEmail } from '../utils/validation';
import { assets } from '../assets/assets';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      if (!checkEmail(email)) {
        Toast.show({
          type: 'error',
          text1: 'Adresă de e-mail invalidă',
        });
      } else {
        const res = await fetch(
          `http://192.168.100.103:85/ana/iReport/public/user/regenerare-parola`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              utilizator: email,
            }),
          },
        );
        const response = await res.json();
        if (response.status === 0) {
          Alert.alert(
            `${response.mesaj.split('!')[0]}!`,
            `${response.mesaj.split('!')[1]}`,
            [
              {
                text: 'OK',
                onPress: () => navigation.navigate('LoginScreen'),
              },
            ],
          );
        } else {
          Toast.show({
            type: 'error',
            text1: response.mesaj,
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
      <Button title="Resetare" color="#51A4D4" onPress={handleResetPassword} />
      <View style={styles.flexRow}>
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
  blue: {
    color: '#51A4D4',
    textDecorationLine: 'underline',
  },
});

export default ForgotPassword;
