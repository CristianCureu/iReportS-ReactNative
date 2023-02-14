import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

const Category = ({ id, title, image, onChangeComponent }) => {
  return (
    <Pressable
      style={[styles.category, styles.shadow]}
      onPress={() => onChangeComponent(title, id)}>
      <SvgUri width="80%" height="80%" uri={image} />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  category: {
    width: '40%',
    height: 250,
    marginVertical: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 8,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  text: {
    color: '#51A4D4',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Category;

//   cureu.ncristian@gmail.com
//   Parola12
