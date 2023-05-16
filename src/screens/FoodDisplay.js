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
						marginTop: 20,
						backgroundColor: "#e5e5e5",
						borderRadius: 8,
						padding: 8,
						width: 80,
						height: 40,
					}}
				>
					<View
						style={{
							backgroundColor: "white",
							borderRadius: 40,
							marginLeft: 3,
							padding: 3,
							marginTop: 3,
						}}
					>
						<Image
							source={require("../../assets/icons/minus-sign.png")}
							style={{
								tintColor: "#e9c46a",
								width: 10,
								height: 12,

								marginRight: 2,
								marginTop: 0,
							}}
						/>
					</View>

					<Text style={{ padding: 5 }}>1</Text>
					<View
						style={{
							backgroundColor: "#e9c46a",
							borderRadius: 40,
							marginLeft: 5,
							padding: 5,
							marginTop: 3,
						}}
					>
						<Image
							source={require("../../assets/icons/plus.png")}
							style={{
								tintColor: "white",
								width: 8,
								height: 12,
							}}
						/>
					</View>
				</View>
			</View>
			<Location />
			<FoodDetails />

			{/* <MapScreen /> */}
		</View>
	);
};

export default FoodDisplay;
