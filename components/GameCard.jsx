import { StyleSheet, Text, View, Image, Animated, Pressable } from "react-native";
import { useRef, useEffect } from "react";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind"

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <Link href={`/${game.slug}`} asChild>
      <StyledPressable className="active:opacity-70 border border-black
      active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
        <View key={game.slug}
          className='flex-row gap-4'>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View className='box-border p-2 flex-shrink'>
            <Text style={styles.title}>{game.title}</ Text>
            <Score score={game.score} maxScore={100} />
            <Text className='flex-shrink' style={styles.description}>
              {game.description.slice(0, 100)}...
            </ Text>
          </View>
        </ View>
      </StyledPressable>
    </Link>
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
  },

  description: {
    fontSize: 16,
    color: '#fff'
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
    width: 107,
    height: 147,
    borderRadius: 10,
  },
});