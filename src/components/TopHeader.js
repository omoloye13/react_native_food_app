import {
	View,
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
} from "react-native";
import React from "react";

const TopHeader = () => {
	return (
		<SafeAreaView>
			<View
				style={{
					marginTop: 15,
					paddingLeft: 10,
					flex: Platform.OS === "ios" ? 0.6 : 0.5,
				}}
			>
				<View
					style={{
						marginTop: Platform.OS === "ios" ? 60 : 35,
						flexDirection: "row",
						justifyContent: "space-around",
					}}
				>
					<TouchableOpacity style={{ marginRight: 0 }}>
						<Image
							source={require("../../assets/icons/hamburger.png")}
							style={{
								width: 25,
								height: 25,
								tintColor: "#ffff",
							}}
						/>
					</TouchableOpacity>
					<View style={{ flexDirection: "row", marginLeft: "55%" }}>
						<TouchableOpacity>
							<Image
								source={require("../../assets/icons/bag.png")}
								style={{ width: 25, height: 25, tintColor: "#ffff" }}
							/>
							<View
								style={{
									borderRadius: 20,
									height: 7,
									width: 7,
									backgroundColor: "#e76f51",
									position: "absolute",
									left: 15,
								}}
							></View>
						</TouchableOpacity>
						<TouchableOpacity>
							<Image
								source={require("../../assets/icons/bell.png")}
								style={{
									width: 25,
									height: 25,
									tintColor: "#ffff",
									marginLeft: 12,
								}}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default TopHeader;
