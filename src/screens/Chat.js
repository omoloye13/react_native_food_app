import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const Chat = () => {
	return (
		<SafeAreaView>
			<View
				style={{
					marginTop: 50,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text>Chat</Text>
			</View>
		</SafeAreaView>
	);
};

export default Chat;
