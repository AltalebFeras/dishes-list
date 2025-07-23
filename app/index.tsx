import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >

      <Text>Home Screen</Text>
      {["Pizza", "Burger", "Pasta"].map((dish) => (
        <Link
          key={dish}
          href={{
            pathname: "/dish-detail",
          }}
          style={{ padding: 20, backgroundColor: "#ddd", marginBottom: 10 }}
        >
          <Text>{dish}</Text>
        </Link>
      ))}
    </View>
    
  );
}
