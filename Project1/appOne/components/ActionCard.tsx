import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's happening in One Piece? is it ENDING next year?
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1592547097938-7942b22df3db?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={5}>
            Luffy is the pirate that want to acheive thier goal to want one
            piece and become king of pirates and then he can fullfil his dream
            lufyy has his crew or nakama, that are with in luffy's journey.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.linkedin.com/in/yogeshprakhar/')
            }>
            <Text style={styles.link}>Read more...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 380,
    height: 400,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    flex: 1,
    marginTop: 5,
    padding: 10,
  },
  footerContainer: {
    // marginLeft: 10,
    // paddingRight: 10,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    color: 'black',
    marginBottom: 5,
  },
  link: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: 'white',
    padding: 6,
    paddingLeft: 18,
    elevation: 6,
    borderRadius: 20,
  },
});
