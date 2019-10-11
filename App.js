import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { differenceInDays } from 'date-fns';

export default function App() {
  function calculateDate() {
    return differenceInDays(
      new Date(),
      new Date(2018, 2, 2)
    )
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>Estamos juntos há:</Text>
      <Text style={[styles.text, styles.days]}>
        {calculateDate()}
        <Text style={[styles.text, styles.small]}>dias</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7004E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'center',
    marginBottom: 20,
  },

  title: {
    textShadowColor: 'rgba(0,0,0,.7)',
    textShadowRadius: 10
  },

  small: {
    fontSize: 22
  },

  days: {
    fontSize: 60,
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1
  }
});
