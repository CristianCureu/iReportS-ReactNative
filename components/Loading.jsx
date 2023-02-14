import { ActivityIndicator, View } from 'react-native';

const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size="large" color="#51A4D4" />
    </View>
  );
};

export default Loading;
