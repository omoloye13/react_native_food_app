import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";

const BottomCard = ({ name, title }) => {
	return (
		// Background
		<View
			style={{
				backgroundColor: "white",
				// height: 500,
				// borderTopRightRadius: 12,
				// borderTopLeftRadius: 12,
				// width: "100%",
				// marginRight: 100,
				// alignSelf: "stretch",
				// marginTop: 30,
			}}
		>
			{/* bottom texts */}
			<View
				style={{
					marginTop: 12,

					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text
					style={{ fontFamily: "Poppins-bold", fontSize: 15, marginLeft: 22 }}
				>
					{title}
				</Text>
				<TouchableOpacity>
					<Text
						style={{
							fontFamily: "Poppins-regular",
							fontSize: 15,
							color: "#2a9d8f",
							marginRight: 15,
						}}
					>
						See all
					</Text>
				</TouchableOpacity>
			</View>
			{/* Displaying the nearby Menu */}
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					height: 120,
					backgroundColor: "#e5e5e5",
					padding: 15,
					borderRadius: 15,
					width: "90%",
					marginLeft: 20,
					marginBottom: 20,
				}}
			>
				<View style={{ flexDirection: "row" }}>
					{/* Image Container */}
					<View>
						<Image
							source={require("../../assets/images/dish.jpg")}
							style={{ borderRadius: 12, width: 90, height: 80 }}
						/>
					</View>
					{/* Text container */}
					<View style={{ padding: 10 }}>
						<Text
							style={{
								fontFamily: "Poppins-semibold",
								fontSize: 15,
							}}
						>
							Big Fried Chicken
						</Text>
						<Text
							style={{
								fontFamily: "Poppins-regular",
								fontSize: 15,
							}}
						>
							GaminBar . 9.2Km
						</Text>
						<View style={{ flexDirection: "row" }}>
							<Image
								source={require("../../assets/icons/star.png")}
								style={{ width: 15, height: 15, tintColor: "#e9c46a" }}
							/>
							<Text
								style={{
									fontFamily: "Poppins-bold",
									fontSize: 15,
								}}
							>
								4.4
							</Text>
						</View>
					</View>
				</View>
				{/* Price Container */}
				<Text
					style={{
						fontFamily: "Poppins-bold",
						fontSize: 15,
						color: "#2a9d8f",
						padding: 10,
						marginLeft: 2,
					}}
				>
					$4.2
				</Text>
			</View>
		</View>
	);
};

export default BottomCard;
