import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SelectActivity = ({ navigation }) => {
  return (
    <View style={styles.items}>
      <TouchableOpacity
        style={[styles.item, styles.border]}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Image
          source={require('../images/icon-raportare-problema/icon-raportare-problema.png')}
        />
        <Text style={styles.itemText}>Raportare problemă</Text>
        <Image
          source={require('../images/icon-meniu-selectat-activ/icon-meniu-selectat-activ.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.item, styles.border]}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Image
          source={require('../images/icon-consultare-publica/icon-consultare-publica.png')}
        />
        <Text style={styles.itemText}>Consultare publică</Text>
        <Image
          source={require('../images/icon-meniu-selectat-activ/icon-meniu-selectat-activ.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Image
          source={require('../images/icon-buget-participativ/icon-buget-participativ.png')}
        />
        <Text style={styles.itemText}>Buget participativ</Text>
        <Image
          source={require('../images/icon-meniu-selectat-activ/icon-meniu-selectat-activ.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    width: '90%',
    height: '50%',
    position: 'absolute',
    bottom: '5%'
  },
  item: {
    height: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 18,
    width: '60%',
  },
  border: {
    borderBottomWidth: 0.8,
    borderColor: '#e6e6e6',
  },
});

export default SelectActivity;
