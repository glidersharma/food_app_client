import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import HomeScreen from "./screens/HomeScreen";
import ResturantScreen from "./screens/ResturantScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CartScreen from "./screens/CartScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
export default function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Resturant" component={ResturantScreen} />
          <Stack.Screen
            name="Cart"
            options={{ presentation: "modal", headerShown: false }}
            component={CartScreen}
          />
          <Stack.Screen
            name="PreparingOrder"
            options={{ presentation: "fullScreenModal", headerShown: false }}
            component={PreparingOrderScreen}
          />
          <Stack.Screen
            name="Delivery"
            options={{ presentation: "fullScreenModal", headerShown: false }}
            component={DeliveryScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
