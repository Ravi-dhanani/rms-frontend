import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { RootStackParamList } from '../../../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Flour'>;

const dummyData = [
  {
    floor: 'Floor 1',
    flats: ['101', '102', '103', '104'],
  },
  {
    floor: 'Floor 2',
    flats: ['201', '202', '203', '204'],
  },
  {
    floor: 'Floor 3',
    flats: ['301', '302', '303', '304'],
  },
];

export default function Flour({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      {dummyData.map((floor, index) => (
        <Card key={index} style={styles.card}>
          <Card.Title title={floor.floor} titleStyle={styles.title} />
          <Card.Content>
            <View style={styles.flatRow}>
              {floor.flats.map((flat, idx) => (
                <Button
                  key={idx}
                  mode="outlined"
                  style={styles.flatButton}
                  labelStyle={styles.flatLabel}
                  onPress={() =>
                    navigation.navigate('Flat', { flatId: flat, label: flat })
                  }
                >
                  {flat}
                </Button>
              ))}
            </View>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0098FF',
  },
  flatRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  flatButton: {
    margin: 5,
    borderRadius: 8,
    minWidth: 70,
    borderColor: '#0098FF',
  },
  flatLabel: {
    fontSize: 14,
    color: 'black',
  },
});
