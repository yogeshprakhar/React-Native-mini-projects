import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Yogesh Prakhar',
      status: 'Senior Software Engineer at Google',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D03AQGAU6gwSzlZRQ/profile-displayphoto-shrink_200_200/0/1695536395966?e=1709164800&v=beta&t=7UeagAHyjClt9RqFuQcoNMfaMpq3DzCmLNUk5RXBgIU',
    },
    {
      uid: 2,
      name: 'Shishir Bhargav',
      status: 'Owner of Paytm',
      imageUrl:
        'https://qph.cf2.quoracdn.net/main-qimg-1fa834002719b3e52330a7a010928342-lq',
    },
    {
      uid: 3,
      name: 'Pranjal Singh',
      status: 'Owner of PhonePe',
      imageUrl:
        'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/07/collage-maker-27-jul-2023-01-46-pm-3317.jpg',
    },
    {
      uid: 4,
      name: 'Yogesh',
      status: 'Owner of Microsoft',
      imageUrl: 'https://i.ytimg.com/vi/IzXBAUFui4E/sddefault.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingBottom: 4,
    color: 'black',
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#FBD28B',
    padding: 4,
    borderRadius: 20,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3335',
  },
  userStatus: {
    fontSize: 16,
  },
});
