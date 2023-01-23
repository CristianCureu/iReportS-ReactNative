import { StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import SelectareActivitateCard from '../components/SelectareActivitateCard';

function SelectareActivitate() {
  return (
    <View style={styles.container}>
      <Background />
      <SelectareActivitateCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center'
  }
});

export default SelectareActivitate;
