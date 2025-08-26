import React from "react";
import { Tabs } from "expo-router";
import { Home, User, Bookmark, Search } from "lucide-react-native";
import "../../global.css";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          height: 100,
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#9CA3AF", // gray-400
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Home
              className="text-black dark:text-white"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <User
              className="text-black dark:text-white"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, size }) => (
            <Bookmark
              className="text-black dark:text-white"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Search
              className="text-black dark:text-white"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
