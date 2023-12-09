import { View, Text, ScrollView, TouchableOpacity,Image } from "react-native";
import React, { useState } from "react";
import {categories} from "../constants";

export default function Categories() {
    const [activeCategory,setActiveCategory] = useState(null);
  return (
    <View clasName="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-hidden"
      >
        {categories.map((category, index) => {
            let isActive = category.id === activeCategory;
            // console.log(isActive,activeCategory,category.id)
            const btnClass = isActive?' bg-gray-600':"bg-gray-200";
            const textClass = isActive?' font-semibold text-gray-800':"text-gray-500";

          return (
            <View className="flex items-center justify-center mr-6" key={index}>
              <TouchableOpacity 
              onPress={()=>setActiveCategory(category.id)}
              className={"p-1 rounded-full shadow bg-gray-200"+btnClass}>
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                />
              </TouchableOpacity>
                <Text className={"text-sm"+textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
