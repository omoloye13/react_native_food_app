import { View, Text, Image } from "react-native";
import React from "react";

const Location = () => {
	return (
		<View
			style={{
				flexDirection: "row",
				marginTop: 10,
				justifyContent: "space-around",
			}}
		>
			{/* Location */}
			<View style={{ flexDirection: "row" }}>
				<Image
					source={require("../../assets/icons/location.png")}
					style={{ width: 12, height: 12, marginTop: 2, tintColor: "#e9c46a" }}
				/>
				<Text
					style={{ fontFamily: "Poppins-regular", fontSize: 12, marginLeft: 4 }}
				>
					2.3km
				</Text>
			</View>
			{/* Ratings */}
			<View style={{ flexDirection: "row" }}>
				<Image
					source={require("../../assets/icons/star.png")}
					style={{ width: 12, height: 12, marginTop: 2, tintColor: "#e9c46a" }}
				/>

				<Text
					style={{ fontFamily: "Poppins-regular", fontSize: 12, marginLeft: 4 }}
				>
					4.7 Ratings
				</Text>
			</View>
			{/* Notifoication time */}
			<View style={{ flexDirection: "row", justifyContent: "space-around" }}>
				<Image
					source={require("../../assets/icons/bell.png")}
					style={{ width: 12, height: 12, marginTop: 2, tintColor: "#e9c46a" }}
				/>
				<Text
					style={{
						fontFamily: "Poppins-regular",
						fontSize: 12,
						marginLeft: 4,
					}}
				>
					20-25mins
				</Text>
			</View>
		</View>
	);
};

export default Location;
