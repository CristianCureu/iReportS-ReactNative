import { useContext, useEffect, useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import AddImage from './AddImage';
import { assets } from '../../assets/assets';
import { UserContext } from '../../UserContext';

const AddPetitionForm = ({ onChangeComponent, component, navigation }) => {
  const token = useContext(UserContext);

  const [image, setImage] = useState('');
  const [street, setStreet] = useState({ id: -1, nume: '' });
  const [number, setNumber] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onChangeImage = image => {
    setImage(image);
  };

  const onChangeStreet = street => {
    setStreet(street);
    navigation.goBack();
  };

  const submitHandler = async () => {
    try {
      if (!(title.length && description.length)) {
        Toast.show({
          type: 'error',
          text1: 'Titlul și descrierea sunt obligatorii!',
        });
      } else {
        const res = await fetch(
          'http://192.168.100.103:85/ana/iReport/public/cereri/adaugare',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              token,
              idCategorie: component.id,
              titlu: title,
              descriere: description,
              poza: image,
              numarPostal: number,
              idStrada: street.id,
            }),
          },
        );
        const response = await res.json();
        console.log(response);
        if (response.status === 0) {
          Alert.alert(`${response.mesaj}`, {
            text: 'OK',
            onPress: () => onChangeComponent('list', 0),
          });
        } else {
          Toast.show({
            type: 'error',
            text1: response.mesaj,
          });
        }
      }
    } catch (err) {
      console.log('AddPetitionForm::submitHandler::', err);
    }
  };

  // useEffect(() => {
  //   console.log(image, street, title, description, number);
  // }, [image, street, title, description, number]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{component.category}</Text>
      <AddImage onChangeImage={onChangeImage} />
      <TouchableOpacity
        style={styles.map}
        onPress={() => navigation.navigate('Map')}>
        <View style={styles.iconMap}>
          <Image source={assets.gpsIcon} />
        </View>
        <Text>Deschide Hartă</Text>
      </TouchableOpacity>
      <Text style={styles.textCenter}>sau</Text>
      <TouchableOpacity
        style={styles.map}
        onPress={() =>
          navigation.navigate('Streets', {
            onChangeStreet,
          })
        }>
        <View style={styles.iconMap}>
          <Image source={assets.locationIcon} />
        </View>
        {street.id === -1 ? (
          <Text>Selectează Strada</Text>
        ) : (
          <Text>{street.nume}</Text>
        )}
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <View style={styles.icon}>
          <Image source={assets.numberIcon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Număr sau Bloc/Apartament"
          value={number}
          onChangeText={setNumber}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.icon}>
          <Image source={assets.titleIcon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Titlu"
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.icon}>
          <Image source={assets.descriptionIcon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Descriere"
          multiline={true}
          numberOfLines={5}
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onChangeComponent('list', 0)}>
          <Text style={styles.text}>Anulare</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.borderBlue]}>
          <Text style={[styles.text, styles.textBlue]} onPress={submitHandler}>
            Trimite
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: '10%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
    width: '100%',
  },
  icon: {
    position: 'absolute',
    left: 0,
    alignItems: 'center',
    width: '10%',
  },
  input: {
    borderBottomWidth: 1,
    paddingHorizontal: 40,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 2,
    width: '30%',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textBlue: {
    color: '#51A4D4',
  },
  borderBlue: {
    borderColor: '#51A4D4',
  },
  map: {
    borderWidth: 1,
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconMap: {
    marginRight: 12,
  },
});

export default AddPetitionForm;
