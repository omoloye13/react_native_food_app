import {
	View,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
	Image,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Form = ({ icon }) => {
	const [menu, setMenu] = useState("");

	return (
		<SafeAreaView>
			<View
				style={{
					marginTop: 10,
					paddingTop: 3,
					paddingLeft: 25,
					marginBottom: 30,
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						height: 45,
						borderColor: "#fff",
						borderWidth: 1,
						borderRadius: 12,
						color: "#fff",
						backgroundColor: "#e5e5e5",
						width: "95%",
					}}
				>
					<TouchableOpacity>
						<Icon
							name="search"
							size={20}
							color="#ffff"
							style={{ padding: 10 }}
						/>
					</TouchableOpacity>
					<TextInput
						style={{
							flex: 1,
							height: 40,
							color: "#fff",
							marginHorizontal: 5,
						}}
						placeholder="Search food would you like to eat"
						onChangeText={setMenu}
						value={menu}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Form;
