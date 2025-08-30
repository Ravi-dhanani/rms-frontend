import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card, List, Text } from 'react-native-paper';

const FlatDetails = () => {
  const [expanded, setExpanded] = React.useState<string | null>(null);

  const handlePress = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card style={styles.card}>
        <Card.Content style={{ alignItems: 'center' }}>
          <Avatar.Image
            size={80}
            source={{ uri: 'https://via.placeholder.com/150' }}
          />
          <Text variant="titleMedium" style={styles.name}>
            Vinubhai
          </Text>
          <Text style={styles.phone}>📞 9876543210</Text>
        </Card.Content>
      </Card>

      <List.Section>
        <List.Accordion
          title="Family Members"
          expanded={expanded === 'family'}
          onPress={() => handlePress('family')}
          titleStyle={[
            styles.title,
            { color: expanded === 'family' ? '#0098FF' : '#333' },
          ]}
          style={styles.accordion}
          left={props => (
            <List.Icon
              {...props}
              icon="account-group"
              color={expanded === 'family' ? '#0098FF' : '#777'}
            />
          )}
        >
          <List.Item
            title="Member 1"
            description="Relation"
            style={styles.item}
            left={props => <List.Icon {...props} icon="account" />}
          />
          <List.Item
            title="Member 2"
            description="Relation"
            style={styles.item}
            left={props => <List.Icon {...props} icon="account" />}
          />
        </List.Accordion>

        <List.Accordion
          title="Business Details"
          expanded={expanded === 'business'}
          onPress={() => handlePress('business')}
          titleStyle={[
            styles.title,
            { color: expanded === 'business' ? '#0098FF' : '#333' },
          ]}
          style={styles.accordion}
          left={props => (
            <List.Icon
              {...props}
              icon="briefcase"
              color={expanded === 'business' ? '#0098FF' : '#777'}
            />
          )}
        >
          <List.Item
            title="Business Name"
            description="Shop No. 12"
            style={styles.item}
            left={props => <List.Icon {...props} icon="store" />}
          />
        </List.Accordion>

        <List.Accordion
          title="Vehicle Details"
          expanded={expanded === 'vehicle'}
          onPress={() => handlePress('vehicle')}
          titleStyle={[
            styles.title,
            { color: expanded === 'vehicle' ? '#0098FF' : '#333' },
          ]}
          style={styles.accordion}
          left={props => (
            <List.Icon
              {...props}
              icon="car"
              color={expanded === 'vehicle' ? '#0098FF' : '#777'}
            />
          )}
        >
          <List.Item
            title="GJ05CD1234"
            description="Bike"
            left={props => <List.Icon {...props} icon="motorbike" />}
            style={styles.item}
          />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginBottom: 16,
    paddingVertical: 10,
  },
  name: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },
  accordion: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  phone: {
    marginTop: 4,
    fontSize: 14,
    color: 'gray',
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
  },
  item: {
    backgroundColor: '#f9f9f9',
    paddingLeft: 50,
  },
});

export default FlatDetails;
