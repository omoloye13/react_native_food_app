import {
	View,
	Text,
	ImageBackground,
	Image,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Location from "../components/Location";
import FoodDetails from "../components/FoodDetails";

const FoodDisplay = () => {
	const onNavigate = useNavigation();
	return (
		<View style={{ flex: 1, padding: 8 }}>
			<ImageBackground
				source={require("../../assets/images/breakfast.jpg")}
				resizeMode="cover"
				style={{
					width: "100%",
					height: 300,
					borderRadius: 10,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 30,
					}}
				>
					<TouchableOpacity
						style={{
							backgroundColor: "white",
							borderRadius: 10,
							padding: 10,
							marginLeft: 15,
						}}
						onPress={() => onNavigate.goBack()}
					>
						<Image
							source={require("../../assets/icons/arrow.png")}
							style={{ width: 20, height: 20 }}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: "white",
							borderRadius: 10,
							padding: 10,
							marginRight: 15,
						}}
					>
						<Image
							source={require("../../assets/icons/bag.png")}
							style={{ width: 20, height: 20 }}
						/>
						<View
							style={{
								borderRadius: 20,
								height: 7,
								width: 7,
								backgroundColor: "#e76f51",
								position: "absolute",
								left: 19,
								top: 12,
							}}
						></View>
					</TouchableOpacity>
				</View>
			</ImageBackground>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					marginTop: 0,
				}}
			>
				{/* menu detail view */}
				<View>
					<Text
						style={{
							fontFamily: "Poppins-bold",
							fontSize: 18,
							padding: 15,
							marginTop: 8,
						}}
					>
						Strawberry Oats
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-around",
						marginTop: 15,
						backgroundColor: "#e5e5e5",
						borderRadius: 10,
						padding: 8,
					}}
				>
					<Image
						source={require("../../assets/icons/minus-sign.png")}
						style={{
							tintColor: "#e9c46a",
							width: 20,
							height: 18,
							marginRight: 5,
							marginTop: 7,
						}}
					/>
					<Text style={{ padding: 5 }}>1</Text>
					<View
						style={{
							// flexDirection: "row",
							// justifyContent: "space-around",
							// marginTop: 15,
							backgroundColor: "#e9c46a",
							borderRadius: 20,
							marginLeft: 10,
							padding: 5,
						}}
					>
						<Image
							source={require("../../assets/icons/plus.png")}
							style={{
								tintColor: "white",
								width: 10,
								height: 10,
							}}
						/>
					</View>
				</View>
			</View>
			<Location />
			<FoodDetails />
		</View>
	);
};

export default FoodDisplay;
