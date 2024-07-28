import { ScrollView, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../components/Icons"
import { Screen } from "../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href='/'>
          <Pressable>
            {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
          </Pressable>
        </Link>

        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>

        <Text className="text-white/90 mb-4">
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.
        </Text>

        <Text className="text-white/90 mb-4">
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.
        </Text>

        <Text className="text-white/90 mb-4">
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.
        </Text>

        <Text className="text-white/90 mb-4">
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.
        </Text>
      </ScrollView>
    </Screen>
  )
}