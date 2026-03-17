import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/data/programs";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
export default function Home() {
  const [search, setSearch] = useState("");
  const filteredPrograms = programs.filter((item) =>
    `${item.university} ${item.country}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  return (
    <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 10 }}>
      <TextInput
        placeholder="Search universities..."
        value={search}
        onChangeText={setSearch}
        style={{
          backgroundColor: "#fff",
          padding: 12,
          borderRadius: 10,
          marginBottom: 12,
          borderWidth: 1,
          borderColor: "#ddd",
        }}
      />
      <FlatList
        data={filteredPrograms}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProgramCard
            university={item.university}
            country={item.country}
            description={item.description}
            onPress={() =>
              router.push({
                pathname: "/details",
                params: { ...item },
              })
            }
          />
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 50 }}>
            No programs available
          </Text>
        }
      />
    </View>
  );
}
