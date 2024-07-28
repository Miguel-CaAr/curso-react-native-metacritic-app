import { View } from "react-native";
import { Stack } from 'expo-router';
import { CircleInfoIcon } from "../components/Icons"
import { Logo } from "../components/Logo"
import { Pressable } from "react-native"
import { Link } from "expo-router"

export default function layout() {
  return (
    <View className='flex-1 bg-black'>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href='/about'>
              <Pressable>
                {({ pressed }) => <CircleInfoIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
              </Pressable>
            </Link>
          )
        }}
      />
    </View>
  )
};