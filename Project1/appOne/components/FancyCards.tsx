import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLabel}>Lucknow , nawab</Text>
          <Text style={styles.cardDescription}>
            Taj Mahal one of the seven wonders made of white marbel that will
            perish your eyes
          </Text>
          <Text style={styles.cardFooter}>2 hours away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingBottom: 5,
  },
  card: {
    width: 380,
    height: 360,
    borderRadius: 6,
    marginHorizontal: 14,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: 'mediumslateblue',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 5,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    flexGrow: 1,
    marginTop: 6,
  },
  cardFooter: {
    color: '#000000',
    marginBottom: 10,
  },
});
