import { StyleSheet, View } from 'react-native';
import Background from '../components/Background';
import Card from '../components/Card';
import Login from '../components/Login';

const LoginScreen = ({ navigation, onChangeToken }) => {

  return (
    <View style={styles.container}>
      <Background />
      <Card
        children={
          <Login navigation={navigation} onChangeToken={onChangeToken} />
        }
      />
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
