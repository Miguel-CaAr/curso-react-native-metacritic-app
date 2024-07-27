import { ScrollView, Text } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <ScrollView>
      <Link className='text-white mt-24' href='/'>
        Ir al inicio
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
  )
}