import { ScrollView, StyleSheet, View } from 'react-native';
import Background from '../components/Background';
import Card from '../components/Card';
import Login from '../components/Login';

const LoginScreen = () => {
  return (
      <View style={styles.container}>
        <Background />
        <Card children={<Login />} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default LoginScreen;
