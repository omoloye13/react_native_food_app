import { View, Text, Image } from "react-native";
import React from "react";

const Hero = ({ name, image }) => {
	return (
		<View>
			<View style={{ flexDirection: "row" }}>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "400",
						fontFamily: "Poppins-regular",
						color: "#fff",
						paddingLeft: 28,
						marginTop: 12,
					}}
				>
					{name}
				</Text>
				<Image
					source={image}
					style={{
						width: 25,
						height: 25,
						position: "absolute",
						top: 40,
						left: 200,
					}}
				/>
			</View>
		</View>
	);
};

export default Hero;
