import { Button, Image, StyleSheet, Text, View } from 'react-native';

const Card = ({ children }) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.header}>
        <Image
          source={require('../assets/header-sigle-eu/header-sigle-eu.png')}
        />
      </View>
      <View style={styles.logo}>
        <Image
          source={require('../assets/logo-sighisoara/logo-sighisoara.png')}
        />
        <Text style={styles.logoText}>iReport Sighișoara</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '8%',
    width: '80%',
    minHeight: 505,
    height: '70%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontFamily: 'Poppins',
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
  logo: {
    alignItems: 'center',
  },
  logoText: { fontSize: 11, fontWeight: 'bold', color: '#080909' },
});

export default Card;
