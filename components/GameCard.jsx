import { StyleSheet, Text, View, Image, Animated } from "react-native";
import { useRef, useEffect } from "react";

export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</ Text>
      <Text style={styles.description}>{game.description}</ Text>
      <View style={styles.containerScore}>
        <Text style={styles.score}>{game.score}</ Text>
      </View>
    </ View>
  )
};

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View styke={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  )
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 48,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },

  description: {
    fontSize: 16,
    color: '#fff'
  },

  score: {
    padding: 3,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },

  containerScore: {
    marginTop: 10,
    backgroundColor: 'green',
    borderRadius: 25,
    position: 'absolute',
    top: 0,
    right: 60,
  },

  image: {
    width: 250,
    height: 400,
    borderRadius: 10,
  },
});