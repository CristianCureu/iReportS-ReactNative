import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import Loading from '../Loading';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Streets = ({ route }) => {
  const [streets, setStreets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { onChangeStreet } = route.params;

  useEffect(() => {
    const getStreets = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          'https://ireport.ecetatean.sighisoara.org.ro/public/cereri/strazi',
        );
        const response = await res.json();
        if (response.status === 0) {
          setStreets(response.strazi);
        } else {
          setError('Datale nu pot fi procesate.');
        }
        setLoading(false);
      } catch (err) {
        console.log('SelectStreet::getStreets::', err);
      }
    };
    getStreets();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, styles.shadow]}>
        <TextInput style={styles.input} placeholder="Caută" />
      </View>
      <View style={styles.list}>
        {error ? (
          <Text>{error}</Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            horizontal={false}
            data={streets}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.street}
                onPress={() => onChangeStreet(item)}>
                <Text style={styles.text}>{item.nume}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: '5%',
    backgroundColor: 'white',
  },
  inputContainer: {
    justifyContent: 'center',
    marginHorizontal: '10%',
    backgroundColor: 'white',
  },
  icon: {
    position: 'absolute',
    left: 0,
    alignItems: 'center',
    width: '10%',
  },
  input: {
    paddingHorizontal: 40,
  },
  list: {
    marginTop: '10%',
    marginBottom: '30%',
    marginHorizontal: '5%',
  },
  street: {
    borderBottomWidth: 1,
    borderColor: '#A6B4BC',
    height: 50,
    justifyContent: 'center',
    marginVertical: 2,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 6,
  },
});

export default Streets;
