import { Text, View } from "react-native";

export default function Dishes({name}: { name?: string[] }) {
  return (
    <View>
      {name && name.map((dish, index) => <Text key={index}>{dish}</Text>)}
    </View>
  );
}
