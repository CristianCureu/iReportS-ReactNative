import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const SelectareActivitateCard = () => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.header}>
        <Image
          source={require('../images/header-sigle-eu/header-sigle-eu.png')}
        />
      </View>
      <View style={styles.logo}>
        <Image
          source={require('../images/logo-sighisoara/logo-sighisoara.png')}
        />
        <Text style={styles.logoText}>iReport Sighișoara</Text>
      </View>
        <View style={styles.items}>
          <View style={[styles.item, styles.border]}>
            <Image
              source={require('../images/icon-raportare-problema/icon-raportare-problema.png')}
            />
            <Text style={styles.itemText}>Raportare problemă</Text>
            <Image
              source={require('../images/icon-meniu-selectat-activ/icon-meniu-selectat-activ.png')}
            />
          </View>
          <View style={[styles.item, styles.border]}>
            <Image
              source={require('../images/icon-consultare-publica/icon-consultare-publica.png')}
            />
            <Text style={styles.itemText}>Consultare publică</Text>
            <Image
              source={require('../images/icon-meniu-selectat-activ/icon-meniu-selectat-activ.png')}
            />
          </View>
          <View style={styles.item}>
            <Image
              source={require('../images/icon-buget-participativ/icon-buget-participativ.png')}
            />
            <Text style={styles.itemText}>Buget participativ</Text>
            <Image
              source={require('../images/icon-meniu-selectat-activ/icon-meniu-selectat-activ.png')}
            />
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '8%',
    width: '80%',
    height: '70%',
    backgroundColor: '#fff',
    alignItems: 'center',
    fontFamily: 'Poppins'
  },
  shadow: {
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 14,
  },
  header: {
    marginTop: '10%',
  },
  logo: {
    alignItems: 'center',
    top: '10%',
  },
  logoText: { fontSize: 9, color: '#080909' },
  items: {
    width: '90%',
    height: '50%',
    top: '20%',
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

export default SelectareActivitateCard;
