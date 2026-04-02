import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // 務必引入此元件 [cite: 779, 824]
import { usePhotoStore } from '../store/usePhotoStore';
import { pickImage } from '../utils/photoHandler';
import { Image } from 'expo-image';

export default function HomeScreen() {
  const { photos, addPhoto } = usePhotoStore();

  const handleUpload = async () => {
    const uri = await pickImage();
    console.log('Photos array:', photos)
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
            console.log('Rendering item:', item),
            <Image 
  source={{ uri: item.uri }} 
  // 💡 放棄 className，直接寫原生 style。
  // 如果這樣照片出來了，就證實是 NativeWind 版本不支援你的 Image 元件。
  style={{ 
    width: '100%', 
    height: 200, 
    borderRadius: 12, 
    marginBottom: 16,
    backgroundColor: '#e5e7eb' 
  }} 
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