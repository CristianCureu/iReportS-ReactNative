import { useEffect } from 'react';
import { FlatList } from 'react-native';
import Category from './Category';

const CategoriesList = ({ onChangeComponent, getCategories, categories }) => {
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <FlatList
      columnWrapperStyle={{
        justifyContent: 'space-evenly',
      }}
      showsVerticalScrollIndicator={false}
      horizontal={false}
      data={categories}
      numColumns={2}
      renderItem={({ item }) => (
        <Category
          id={item.id}
          title={item.denumire}
          image={item.imagine}
          onChangeComponent={onChangeComponent}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default CategoriesList;
