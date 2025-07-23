import { Text, View } from "react-native";

export default function DishDetail({ route }: { route: any }) {
  const { dish } = route.params;

  return (
    <View>
      <Text>{dish}</Text>
    </View>
  );
}
