import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddPetitionScreen from '../screens/AddPetitionScreen';
import MyPetitionsScreen from '../screens/MyPetitionsScreen';
import PublicPetitionsScreen from '../screens/PublicPetitionsScreen';
import { assets } from '../assets/assets';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();

const addPetitionName = 'Adaugă Petiție';
const myPetitionsName = 'Petițiile Mele';
const publicPetitionsName = 'Petiții Publice';

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName={addPetitionName}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#51A4D4',
        tabBarActiveBackgroundColor: 'rgba(81, 164, 212, 0.2)',
        tabBarStyle: {
          height: '10%',
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name={addPetitionName}
        component={AddPetitionScreen}
        options={{
          tabBarLabel: 'Adaugă Petiție',
          tabBarIcon: () => <Image source={assets.addPetitionIcon} />,

          headerShown: false,
        }}
      />
      <Tab.Screen
        name={myPetitionsName}
        component={MyPetitionsScreen}
        options={{
          tabBarLabel: 'Petițiile Mele',
          tabBarIcon: () => <Image source={assets.myPetitionsIcons} />,
          header: () => {
            return <Header title={myPetitionsName} />;
          },
        }}
      />
      <Tab.Screen
        name={publicPetitionsName}
        component={PublicPetitionsScreen}
        options={{
          tabBarLabel: 'Petiții Publice',
          tabBarIcon: () => <Image source={assets.publicPetitionsIcon} />,
          header: () => {
            return <Header title={publicPetitionsName} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
