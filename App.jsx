import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import Loading from './components/Loading';
import Map from './components/AddPetition/Map';
import Streets from './components/AddPetition/Streets';
import SideNav from './navigation/SideNav';
import AuthNav from './navigation/AuthNav';
import { UserContext } from './UserContext';
import Petition from './components/Petition';

const Stack = createNativeStackNavigator();

const App = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChangeToken = token => {
    setToken(token);
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        setLoading(true);
        const session = await AsyncStorage.getItem('session');
        setToken(session);
        setLoading(false);
      } catch (err) {
        console.log('App::getToken::', err);
      }
    };
    getToken();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <UserContext.Provider value={token}>
      <NavigationContainer>
        {token ? (
          <Stack.Navigator>
            <Stack.Screen
              name="SideNav"
              component={SideNav}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Streets" component={Streets} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Petition" component={Petition} />
          </Stack.Navigator>
        ) : (
          <AuthNav onChangeToken={onChangeToken} />
        )}
        <Toast position="bottom" />
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
