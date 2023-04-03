import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodDisplay from "../screens/FoodDisplay";
import BottomTabs from "./BottomTabs";

const StackScreens = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="HomeScreen" component={BottomTabs} />
			<Stack.Screen name="FoodDisplay" component={FoodDisplay} />
		</Stack.Navigator>
	);
};

export default StackScreens;
