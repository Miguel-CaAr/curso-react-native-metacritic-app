import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "../components/Logo";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    getLatestGames()
      .then(games => {
        setGames(games);
      });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {/* 
    'ScrollView': No es el optimo en este caso, renderiza todo y 
    cuando hay contenido dinamico puede llegar a ser lento.
    'SafeAreaView': Este es optimo pero solo funciona en IOS.\
    'FlatList': Es el mejor y con mas caracteristicas (Este no envuelve
      elementos, sino que recibe props).
    */}
      <View style={{ marginBottom: 10 }}>
        <Logo />
      </View>
      {
        games.length === 0
          ?
          < ActivityIndicator size={100} color="green" />
          :
          < FlatList

            data={games}
            keyExtractor={(game) => game.slug}
            renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
          />
      }
    </ View>
  )
};

const styles = StyleSheet.create({
});
