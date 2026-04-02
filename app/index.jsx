import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // 務必引入此元件 [cite: 779, 824]
import { usePhotoStore } from '../store/usePhotoStore';
import { pickImage } from '../utils/photoHandler';

export default function HomeScreen() {
  const { photos, addPhoto } = usePhotoStore();

  const handleUpload = async () => {
    const uri = await pickImage();
    if (uri) addPhoto(uri);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="flex-1 p-4">
        <Text className="text-2xl font-bold mb-4">photowoooo!</Text>
        
        <FlatList
          data={photos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image 
              source={{ uri: item.uri }} 
              className="w-full h-48 rounded-lg mb-4" 
              resizeMode="cover"
            />
          )}
          contentContainerStyle={{ paddingBottom: 100 }} 
        />

        {/* upload button */}
        <TouchableOpacity 
          className="absolute right-6 bottom-8 bg-blue-500 w-16 h-16 rounded-full items-center justify-center shadow-lg"
          style={{ elevation: 8 }} 
          onPress={handleUpload}
        >
          <Text className="text-white text-3xl">+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}