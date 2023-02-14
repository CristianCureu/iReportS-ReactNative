import { StyleSheet, View } from 'react-native';
import Background from '../components/Background';
import Card from '../components/Card';
import Register from '../components/Register';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Background />
      <Card children={<Register navigation={navigation} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default RegisterScreen;
