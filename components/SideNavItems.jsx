import { View, Text } from 'react-native';
import { FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { assets } from '../assets/assets';

const data = [
  { id: 1, name: 'Adaugă Petiție', icon: assets.addPetitionIcon },
  { id: 2, name: 'Petițiile Mele', icon: assets.myPetitionsIcons },
  { id: 3, name: 'Petiții Publice', icon: assets.publicPetitionsIcon },
];

const SideNavItems = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(`${item.name}`)}>
            <View style={styles.itemIcon}>
              <Image source={item.icon} />
            </View>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    padding: 20,
    borderBottomColor: '#A6B4BC',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: '30%',
  },
  itemIcon: {
    width: '10%',
    left: '10%',
    justifyContent: 'center',
    position: 'absolute',
  },
});

export default SideNavItems;
