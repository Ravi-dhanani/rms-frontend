import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const profiles: any[] = [
  {
    id: 1,
    name: 'Ravi Dhanani',
    role: 'Software Engineer',
    avatar: require('../../../../assets/smile.png'),
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'UI/UX Designer',
    avatar: require('../../../../assets/smile.png'),
  },
  {
    id: 3,
    name: 'Aarav Patel',
    role: 'Project Manager',
    avatar: require('../../../../assets/smile.png'),
  },
  {
    id: 4,
    name: 'Sara Khan',
    role: 'HR Manager',
    avatar: require('../../../../assets/smile.png'),
  },
];

// 👉 Utility: split profiles into groups of 2
const chunkArray = (arr: any[], size: number) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export default function Pramukh() {
  const groupedProfiles = chunkArray(profiles, 2);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        Society Authorities
      </Text>

      {profiles.length > 0 ? (
        <Swiper autoplay loop showsPagination={false} autoplayTimeout={10}>
          {groupedProfiles.map((group, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
            >
              {group.map(item => (
                <Card
                  key={item.id}
                  style={{
                    width: width / 2.3,
                    padding: 5,
                    borderRadius: 15,
                  }}
                >
                  <Card.Content style={styles.cardContainer}>
                    <Avatar.Image size={60} source={item.avatar} />
                    <Text variant="titleMedium" style={styles.authorityName}>
                      {item.name}
                    </Text>
                    <Text variant="bodySmall" style={styles.role}>
                      {item.role}
                    </Text>
                  </Card.Content>
                </Card>
              ))}
            </View>
          ))}
        </Swiper>
      ) : (
        <Text style={{ textAlign: 'center', marginTop: 30, color: 'gray' }}>
          No profiles available
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  title: {
    display: 'flex',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  authorityName: {
    marginTop: 5,
  },
  role: {
    color: 'gray',
  },
});
