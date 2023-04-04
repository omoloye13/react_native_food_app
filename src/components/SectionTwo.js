import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BottomCard from "./BottomCard";

const SectionTwo = ({ onPress, title }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				marginHorizontal: 20,
				marginTop: 0,

				marginBottom: 0,
				marginLeft: 30,
			}}
		>
			<View style={{ flex: 1, justifyContent: "center" }}>
				<Text style={{ fontSize: 18, fontWeight: "500", color: "black" }}>
					{title}
				</Text>
			</View>
			<TouchableOpacity style={{ justifyContent: "center" }} onPress={onPress}>
				<Text style={{ color: "green", fontSize: 14 }}>View All</Text>
			</TouchableOpacity>
			<BottomCard />
		</View>
	);
};

export default SectionTwo;
