import { useContext, useEffect, useState } from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Loading from '../components/Loading';
import Petition from '../components/Petition';
import { UserContext } from '../UserContext';

const MyPetitionsScreen = ({ navigation }) => {
  const token = useContext(UserContext);

  const [petitions, setPetitions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPetitions = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          'http://192.168.100.103:85/ana/iReport/public/cereri/index',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              token,
              public: true,
              offSet: 0,
              limit: 10,
              idStare: 0,
            }),
          },
        );
        const response = await res.json();
        console.log(response);
        if (response.status === 0) {
          setPetitions(response.cereri);
        }
        setLoading(false);
      } catch (err) {
        console.log('MyPetitionsScreen::getPetitions::', err);
      }
    };
    getPetitions();
  }, []);

  if (loading) {
    <Loading />;
  }

  return (
    <View>
      <View style={styles}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={petitions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('Petition')}>
              {item.poza !== null && (
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{ uri: item.poza }}
                />
              )}
              <Text>{item.titlu}</Text>
              <Text>{item.descriere}</Text>
              <Text>{item.status}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
  },
  item: {
    borderBottomWidth: 1,
  },
});

export default MyPetitionsScreen;
