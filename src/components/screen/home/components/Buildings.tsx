import { RootStackParamList } from "../../../../../App";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Card } from "react-native-paper";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const blocks = Array.from({ length: 26 }, (_, i) => ({
  id: (i + 1).toString(),
  label: String.fromCharCode(65 + i),
}));

export default function Buildings() {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = (heightsId: string, label: string) => {
    navigation.navigate("Flour", {
      heightsId,
      label,
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buildings</Text>

      <FlatList
        data={blocks}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePress(item.id, item.label)}
            style={{ flex: 1 }}
          >
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Text style={styles.text}>{item.label}</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: "#76b3ef",
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 25,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#1976d2",
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    display: "flex",
    marginLeft: 13,
    fontWeight: 600,
    fontSize: 23,
  },
});
