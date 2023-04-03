// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { SafeAreaView, Text, View } from "react-native";
import styles from "./Style";
import { useFonts } from "expo-font";
import StackScreens from "./src/navigations/StackScreens";

import BottomTabs from "./src/navigations/BottomTabs";
export default function App() {
	const [fontsLoaded] = useFonts({
		"Poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
		"Poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
		"Poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
	});
	if (!fontsLoaded) {
		return null;
	}
	// const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			{/* <BottomTabs /> */}
			<StackScreens />
		</NavigationContainer>
	);
}
