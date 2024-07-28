import { Link, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { Screen } from "../components/Screen"

export default function Detail() {
  const { gameslug } = useLocalSearchParams();

  return (
    <Screen>
      <View>
        <View>
          <Text className="text-white font-bold mb-8 text-2xl">Detalle del juego {gameslug}</Text>
          <Link href="/" className="text-blue-500">Volver atras</Link>
        </View>
      </View>
    </Screen>
  )
}