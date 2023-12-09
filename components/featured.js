import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import ResturantCard from "./resturantCard";
import {themeColors} from '../theme'

export default function FeaturedRow({title, description, restaurants}) {
    console.log("category  screen",description);
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">
            {description}
          </Text>
        </View>
        
        <TouchableOpacity>
          <Text style={{color: themeColors.text}} className="font-semibold">See All</Text>
        </TouchableOpacity>
      </View>

      

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className="overflow-visible py-5"
       >
        {
          restaurants.map((resturant,index)=>{
            return (
                <ResturantCard
                  key={index}
                  id={resturant._id}
                  imgUrl={resturant.image}
                  title={resturant.name}
                  rating={resturant.rating}
                  type={resturant.type?.name}
                  address="123 main street"
                  description={resturant.description}
                  dishes={resturant.dishes}
                  lng={resturant.lng}
                  lat={resturant.lat}
                  image = {resturant.image}
              />    
            )
          })
        }           
       </ScrollView>
    
    </View>
  );
}
