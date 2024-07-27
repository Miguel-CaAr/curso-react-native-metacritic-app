import { View } from "react-native";
import { Slot } from 'expo-router';

export default function layout() {
  return (
    <View className='flex-1 bg-black'>
      <Slot />
    </View>
  )
};