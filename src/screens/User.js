import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const User = () => {
	return (
		<SafeAreaView>
			<View
				style={{
					marginTop: 50,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text>User</Text>
			</View>
		</SafeAreaView>
	);
};

export default User;
