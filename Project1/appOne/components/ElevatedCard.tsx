import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Next</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>with</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>your</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>fingers</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>understood</Text>
        </View>
      </ScrollView>
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
    borderRadius: 8,
  },
  cardElevated: {
    backgroundColor: 'darkgrey',
    elevation: 8,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: 'purple',
  },
});
