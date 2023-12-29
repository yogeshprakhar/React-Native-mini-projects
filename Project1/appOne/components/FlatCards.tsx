import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Brown</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Chocolate</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Crimson</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Crimson</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 45,
    color: 'black',
    paddingHorizontal: 8,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    margin: 8,
    fontSize: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  cardOne: {
    backgroundColor: 'brown',
  },
  cardTwo: {
    backgroundColor: 'chocolate',
  },
  cardThree: {
    backgroundColor: 'crimson',
  },
});
