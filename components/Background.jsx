import { Image, StyleSheet, Text, View } from 'react-native';

const Background = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/background-color/background-color.png')}
      />
      <Text style={styles.text}>
        Pentru informații detaliate despre celelalte programe cofinanțate de
        Uniunea Europeană, vă invităm să vizitați www.fonduri-ue.ro Conținutul
        acestei pagini web nu reprezintă în mod obligatoriu poziția oficială a
        Uniunii Europene. Întreaga responsabilitate asupra corectitudinii și
        coerenței informațiilor prezentate revine inițiatorilor paginii web.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    minHeight: '100%',
    alignItems: 'center',
    position: 'relative'
  },
  img: {
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  text: {
    position: 'absolute',
    bottom: '4%',
    width: '70%',
    fontSize: 12,
    textAlign: 'center',
    color: '#A6B4BC',
  },
});

export default Background;
