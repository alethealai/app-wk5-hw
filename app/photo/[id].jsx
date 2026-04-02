import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function PhotoDetail() {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 items-center justify-center">
      <Text>照片 ID: {id}</Text>
    </View>
  );
}