import { Text, View } from "react-native";

import { RouteProp } from "@react-navigation/native";

type DishDetailRouteProp = RouteProp<{ params: { dish: string } }, 'params'>;

export default function DishDetail({ route }: { route: DishDetailRouteProp }) {
  const { dish } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Dish Detail</Text>
      <Text>{dish}</Text>
    </View>
  );
}
