import { Alert, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { assets } from '../../assets/assets';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const AddImage = ({ onChangeImage }) => {
  const openCamera = async () => {
    const image = await launchCamera({
      mediaType: 'photo',
      includeBase64: true,
    });
    console.log(image);
  };

  const openGallery = async () => {
    try {
      const image = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: true,
      });
      const base64 = image.assets[0].base64;
      const base64Image = 'data:image/jpeg;base64,' + base64;
      onChangeImage(base64Image);
    } catch (err) {
      console.log(err);
    }
  };

  const addImage = () => {
    Alert.alert(
      'Încărcare imagine',
      'Selectați sursa',
      [
        {
          text: 'Camera',
          onPress: () => openCamera(),
        },
        {
          text: 'Galerie',
          onPress: () => openGallery(),
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <TouchableOpacity style={styles.addImage} onPress={addImage}>
      <Image style={styles.image} source={assets.addImageIcon} />
      <Text>Adaugă imagine</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addImage: {
    borderWidth: 1,
    height: '15%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default AddImage;
