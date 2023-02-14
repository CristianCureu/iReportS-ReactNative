import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, TextInput, View } from 'react-native';
import { checkPhoneNumber, checkEmail } from '../utils/validation';
import { assets } from '../assets/assets';
import Toast from 'react-native-toast-message';

const Register = ({ navigation }) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = async () => {
    try {
      if (
        !(lastName.length && firstName.length && email.length && phone.length)
      ) {
        Toast.show({
          type: 'error',
          text1: 'Toate câmpurile sunt obligatorii!',
        });
      } else if (!checkEmail(email)) {
        Toast.show({
          type: 'error',
          text1: 'Adresă de e-mail invalidă!',
        });
      } else if (!checkPhoneNumber(phone)) {
        Toast.show({
          type: 'error',
          text1: 'Număr de telefon invalid!',
        });
      } else {
        const res = await fetch(
          'http://192.168.100.103:85/ana/iReport/public/user/creare-cont',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              prenume: firstName,
              nume: lastName,
              telefon: phone,
            }),
          },
        );
        const response = await res.json();
        if (response.status === 0) {
          Alert.alert(
            `${response.mesaj.split('.')[0]}`,
            `${response.mesaj.split('.')[1]}`,
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
    <View style={styles.register}>
      <View style={styles.inputs}>
        <View style={styles.inputView}>
          <View style={styles.absoluteLeft}>
            <Image source={assets.userIcon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Nume"
            placeholderTextColor="#A6B4BC"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={styles.inputView}>
          <View style={styles.absoluteLeft}>
            <Image source={assets.userIcon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Prenume"
            placeholderTextColor="#A6B4BC"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
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
            <Image source={assets.phoneIcon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Telefon"
            placeholderTextColor="#A6B4BC"
            keyboardType="numeric"
            value={phone}
            onChangeText={setPhone}
          />
        </View>
      </View>
      <Button title="Creare" color="#51A4D4" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  register: {
    width: '75%',
  },
  inputs: {
    marginBottom: '20%',
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
});

export default Register;
