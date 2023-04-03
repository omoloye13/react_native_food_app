import { View, SafeAreaView } from "react-native";
import React from "react";
import TopHeader from "../components/TopHeader";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Carousel from "../components/Carousel";

const Home = () => {
	return (
		<SafeAreaView>
			<View
				style={{
					marginTop: 0,
					backgroundColor: "#2a9d8f",
					borderTopLeftRadius: 8,
					borderTopRightRadius: 8,
					height: 270,
					padding: 0,
					width: "100%",
				}}
			>
				<TopHeader />
				<View style={{ marginTop: 10 }}>
					<Hero
						name={"Delicious food ready to be delivered for you"}
						image={require("../../assets/images/soup.png")}
					/>
				</View>

				<Form />
				<View>
					<Carousel name={"Recommended"} title={"Near of you"} />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
