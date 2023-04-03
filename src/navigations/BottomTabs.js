import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Chat from "../screens/Chat";
import Search from "../screens/Search";

import User from "../screens/User";
const BottomTabs = () => {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{ headerShown: false }}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: () => {
						return (
							<View>
								<Image
									source={require("../../assets/icons/home.png")}
									style={{ width: 17, height: 17, tintColor: "#e9c46a" }}
								/>
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Chat"
				component={Chat}
				options={{
					tabBarIcon: () => {
						return (
							<View>
								<Image
									source={require("../../assets/icons/chat.png")}
									style={{ width: 17, height: 17, tintColor: "#264653" }}
								/>
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Search"
				component={Search}
				options={{
					tabBarIcon: () => {
						return (
							<View>
								<Image
									source={require("../../assets/icons/loupe.png")}
									style={{ width: 17, height: 17, tintColor: "#264653" }}
								/>
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="User"
				component={User}
				options={{
					tabBarIcon: () => {
						return (
							<View>
								<Image
									source={require("../../assets/icons/user.png")}
									style={{ width: 17, height: 17, tintColor: "#264653" }}
								/>
							</View>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabs;
