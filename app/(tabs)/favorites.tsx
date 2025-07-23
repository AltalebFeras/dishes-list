import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from "react-native";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Ionicons name="heart-outline" size={64} color="#ccc" />
      <Text style={styles.title}>Your Favorites</Text>
      <Text style={styles.subtitle}>
        Save your favorite dishes here
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
