import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  university: string;
  country: string;
  description: string;
  onPress: () => void;
};

export default function ProgramCard({
  university,
  country,
  description,
  onPress,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, { opacity: pressed ? 0.7 : 1 }]}
      onPress={onPress}
    >
      <Text style={styles.title}>{university}</Text>
      <Text style={styles.country}>{country}</Text>
      <Text numberOfLines={2} style={styles.desc}>
        {description}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginVertical: 10,
    borderRadius: 14,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  country: {
    color: "#666",
    marginTop: 4,
    fontSize: 13,
  },
  desc: {
    color: "#444",
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
  },
});
