import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const FoodMenu = ({ FoodItem, marginLeft, marginRight }) => {
	const navigation = useNavigation();
	return (
		<View
			style={{
				backgroundColor: "white",
				marginTop: 0,
				padding: 8,
				marginLeft: marginLeft,
				margin: marginRight,
				borderRadius: 12,
				height: 220,
				width: 240,
			}}
		>
			<TouchableOpacity>
				<Image
					source={FoodItem.image}
					// resizeMode="cover"
					style={{ width: 220, height: 150, borderRadius: 12 }}
					onPress={() => navigation.navigate("FoodDisplay")}
				/>

				{/* rating */}
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						backgroundColor: "white",
						position: "absolute",
						paddingHorizontal: 8,
						paddingVertical: 6,
						borderRadius: 12,
						top: 12,
						right: 10,
					}}
				>
					<View style={{ justifyContent: "center", paddingRight: 6 }}>
						<Image
							source={require("../../assets/icons/star.png")}
							style={{ width: 14, height: 14 }}
						/>
					</View>
					<View style={{ justifyContent: "center" }}>
						<Text style={{ fontWeight: "bold" }}>{FoodItem.rating}</Text>
					</View>
				</View>
			</TouchableOpacity>

			<View style={{ padding: 12 }}>
				<Text
					numberOfLines={1}
					style={{
						fontSize: 15,
						fontWeight: "700",
						fontFamily: "Poppins-semibold",
					}}
				>
					{FoodItem.title}
				</Text>
				<Text
					style={{
						fontSize: 12,
						paddingTop: 8,
						fontWeight: "600",
						color: "green",
					}}
				>
					${FoodItem.price.toFixed(2)}
				</Text>
			</View>
		</View>
	);
};

export default FoodMenu;
