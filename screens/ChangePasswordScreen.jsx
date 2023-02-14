import { StyleSheet, View } from 'react-native';
import Background from '../components/Background';
import Card from '../components/Card';
import ChangePassword from '../components/ChangePassword';

const ChangePasswordScreen = ({ navigation, route, onTokenChange }) => {
  const { email, password } = route.params;

  return (
    <View style={styles.container}>
      <Background />
      <Card
        children={
          <ChangePassword
            navigation={navigation}
            email={email}
            password={password}
            onTokenChange={onTokenChange}
          />
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

export default ChangePasswordScreen;
