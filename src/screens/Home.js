import { View, Text, Image, ImageBackground, FlatList } from "react-native";
import React from "react";
import TopHeader from "../components/TopHeader";
import Hero from "../components/Hero";
import Form from "../components/Form";
// import SectionTwo from "../components/sectionTwo";
import Section from "../components/Section";
import { categories } from "../external_data/Database";
import FoodMenu from "../components/FoodMenu";
import BottomCard from "../components/BottomCard";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
	const navigation = useNavigation();
	return (
		<View style={{ flex: 1 }}>
			<ImageBackground
				source={require("../../assets/images/imgBG.jpg")}
				resizeMode="cover"
				style={{ width: "100%", height: "100%" }}
			>
				<TopHeader />
				<View style={{ marginTop: 75 }}>
					<Hero
						name={"Delicious food ready to be delivered for you"}
						image={require("../../assets/images/soup.png")}
					/>
				</View>
				<Form />

				{/* categories */}
				<View
					style={{
						flex: 1,
						borderTopLeftRadius: 25,
						borderTopRightRadius: 25,
						backgroundColor: "#F8F8F8",
					}}
				>
					<Section title="Recommended" />

					{/* list of food items */}
					<FlatList
						data={categories}
						horizontal
						keyExtractor={(item) => item.id}
						renderItem={({ item, index }) => {
							console.log("items", item);
							return (
								<FoodMenu
									FoodItem={item}
									marginLeft={index == 0 ? 20 : 12}
									marginRight={index == item.length - 1 ? 20 : 0}
									onPress={() => navigation.navigate("FoodDisplay")}
								/>
							);
						}}
					/>
					<BottomCard title={"Nearby Places"} />
				</View>
			</ImageBackground>
		</View>
	);
};

export default Home;
