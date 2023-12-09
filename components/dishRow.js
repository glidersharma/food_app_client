import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCartItemsById } from "../slices/cartSlice";

export default function DishRow({ item }) {
  // console.log(item.image);
  const dispatch = useDispatch();
  const totalItem = useSelector(state => selectCartItemsById(state,item.id));
  console.log(totalItem);
  const handleIncrease = ()=>{
    dispatch(addToCart({...item}))
  }
  const handleDecrease = ()=>{
    dispatch(removeFromCart({...item}))
  }
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl ">{item.name}</Text>
          <Text className="text-sm text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold ">
            ${item.price}
          </Text>
          <View className="flex-row item-center">
            <TouchableOpacity
            disabled={!totalItem.length}
            onPress={handleDecrease}
              className="p1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                color={"white"}
              />
            </TouchableOpacity>
            <Text className="px-3">{totalItem.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              className="p1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                color={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
