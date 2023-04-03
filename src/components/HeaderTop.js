import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

const HeaderTop = ({ name }) => {
	return (
		<SafeAreaView>
			{/* Header texts */}
			<View
				style={{
					margin: 19,
					flexDirection: "row",
					// justifyContent: "space-around",
				}}
			>
				<Text
					style={{ fontFamily: "Poppins-bold", fontSize: 15, marginLeft: 5 }}
				>
					{name}
				</Text>
				<TouchableOpacity>
					<Text
						style={{
							fontFamily: "Poppins-regular",
							fontSize: 15,
							color: "#2a9d8f",
						}}
					>
						See all
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default HeaderTop;
