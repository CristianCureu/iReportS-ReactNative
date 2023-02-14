import { StyleSheet, View } from 'react-native';
import Background from '../components/Background';
import Card from '../components/Card';
import ForgotPassword from '../components/ForgotPassword';

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Background />
      <Card children={<ForgotPassword navigation={navigation} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ForgotPasswordScreen;
