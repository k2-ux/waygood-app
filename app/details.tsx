import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Details() {
  const { university, country, description } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Program Details" }} />
      <Text style={styles.title}>{university}</Text>
      <Text style={styles.country}>{country}</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  country: {
    fontSize: 15,
    color: "#666",
    marginVertical: 10,
  },
  desc: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
  },
});
