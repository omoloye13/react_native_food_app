import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const FoodDetails = () => {
	return (
		<View style={{ margin: 20 }}>
			<Text style={{ fontFamily: "Poppins-bold", fontSize: 18 }}>
				Description
			</Text>
			<Text style={{ fontFamily: "Poppins-regular", fontSize: 15 }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
				temporibus hic libero nesciunt iure quod vitae fugit quia nihil iusto{" "}
				<Text style={{ color: "#2a9d8f", fontFamily: "Poppins-bold" }}>
					Read More...
				</Text>
			</Text>
			<Image
				source={require("../../assets/images/map.jpeg")}
				style={{
					width: "100%",
					height: 160,
					borderRadius: 10,
				}}
			/>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					position: "absolute",
					// left:0,
					top: 285,
				}}
			>
				<TouchableOpacity
					style={{
						flexDirection: "row",
						borderWidth: 1,
						borderColor: "#e9c46a",
						borderRadius: 20,
						padding: 10,
						width: "45%",
						// justifyContent: "space-around",
					}}
				>
					<Image
						source={require("../../assets/icons/chat.png")}
						style={{
							width: 20,
							height: 20,
							tintColor: "#e9c46a",
							marginLeft: 8,
						}}
					/>
					<Text
						style={{
							fontFamily: "Poppins-semibold",
							fontSize: 12,
							color: "#e9c46a",
							marginLeft: 15,
						}}
					>
						Chat
					</Text>
				</TouchableOpacity>

				<View
					style={{
						backgroundColor: "#e9c46a",
						borderRadius: 20,
						padding: 10,
						width: "45%",
						marginLeft: 40,
						// justifyContent: "space-around",
					}}
				>
					<Text
						style={{
							fontFamily: "Poppins-semibold",
							fontSize: 12,
							color: "white",
							// marginLeft: 12,
							textAlign: "center",
						}}
					>
						Add Cart
					</Text>
				</View>
			</View>
		</View>
	);
};

export default FoodDetails;
