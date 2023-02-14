import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNav from './BottomNav';
import SideNavItems from '../components/SideNavItems';

const Drawer = createDrawerNavigator();

const SideNav = ({ navigation }) => {
  return (
    <Drawer.Navigator
      drawerContent={() => <SideNavItems navigation={navigation} />}>
      <Drawer.Screen
        name="BottomNav"
        component={BottomNav}
        options={{
          headerTitle: {},
        }}
      />
    </Drawer.Navigator>
  );
};

export default SideNav;
