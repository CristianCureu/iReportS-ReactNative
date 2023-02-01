import { StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Card from '../components/Card';
import SelectActivity from '../components/SelectActivity';

const SelectActivityScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Background />
      <Card children={<SelectActivity navigation={navigation} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default SelectActivityScreen;
