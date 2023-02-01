import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Login = () => {
  return (
    <View style={styles.login}>
      <TextInput
        style={styles.input}
        placeholder="Adresă E-mail"
        placeholderTextColor="#A6B4BC"
      />
      <TextInput
        style={styles.input}
        placeholder="Parolă"
        placeholderTextColor="#A6B4BC"
      />
      <Text style={styles.forgot}>Ai uitat parola?</Text>
      <Button title="Intră" />
      <View style={styles.register}>
        <Text>Nu ai cont?</Text>
        <Text style={styles.blue}>Înregistrează-te acum</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    width: '75%',
    height: '50%',
    position: 'absolute',
    bottom: '5%',
  },
  input: {
    height: '20%',
    fontSize: 14,
    color: '#A6B4BC',
    borderBottomWidth: 1,
    borderBottomColor: '#A6B4BC',
  },
  forgot: {
    marginTop: 8,
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
