import * as ImagePicker from 'expo-image-picker';

export const pickImage = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
  if (status !== 'granted') {
    alert('需要相簿權限才能選取照片！'); 
    return null;
  }

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'], 
    allowsEditing: true, 
    aspect: [4, 3], 
    quality: 0.4, 
  });

  if (!result.canceled) {
    return result.assets[0].uri; 
  }
  return null;
};