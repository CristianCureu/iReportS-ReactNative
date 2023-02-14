import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import CategoriesList from '../components/AddPetition/CategoriesList';
import AddPetitionForm from '../components/AddPetition/AddPetitionForm';

const AddPetitionScreen = ({ navigation, token }) => {
  const [component, setComponent] = useState({ category: 'list', id: 0 });
  const [categories, setCategories] = useState([]);

  const onChangeComponent = (category, id) => {
    setComponent({ category, id });
  };

  const getCategories = async () => {
    try {
      const res = await fetch(
        `https://ireport.ecetatean.sighisoara.org.ro/public/cereri/categorii`,
      );
      const response = await res.json();
      setCategories(response.categorii);
    } catch (err) {
      console.log('AddPetitonScreen::', err);
    }
  };

  return (
    <View style={styles.container}>
      {component.category === 'list' ? (
        <CategoriesList
          onChangeComponent={onChangeComponent}
          getCategories={getCategories}
          categories={categories}
        />
      ) : (
        <AddPetitionForm
          onChangeComponent={onChangeComponent}
          component={component}
          navigation={navigation}
          token={token}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default AddPetitionScreen;
