import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SelectActivityScreen from '../screens/SelectActivityScreen';

const Stack = createNativeStackNavigator();

const AuthNav = ({ onChangeToken }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SelectActivityScreen"
        component={SelectActivityScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        options={{
          title: null,
          headerBackTitle: 'Înapoi',
          headerTransparent: true,
        }}>
        {props => <LoginScreen {...props} onChangeToken={onChangeToken} />}
      </Stack.Screen>
      <Stack.Screen
        name="ChangePasswordScreen"
        options={{
          title: null,
          headerBackTitle: 'Înapoi',
          headerTransparent: true,
        }}>
        {props => (
          <ChangePasswordScreen {...props} onChangeToken={onChangeToken} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: null,
          headerBackTitle: 'Înapoi',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          title: null,
          headerBackTitle: 'Înapoi',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNav;
