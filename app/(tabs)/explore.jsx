import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-blue-200">
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg font-bold">Profile</Text>
        <Text className="text-base text-gray-700">
          This is the profile page of the app.
        </Text>
        <Text className="text-sm text-gray-500">
          You can customize this page as needed.
        </Text>
        <Text className="text-sm text-gray-500">
          This page is currently under development.
        </Text>
        <Text className="text-sm text-gray-500">
          More features will be added soon.
        </Text>
        <Text className="text-sm text-gray-500">Stay tuned for updates!</Text>
        <Text className="text-sm text-gray-500">
          Thank you for using our app!
        </Text>
        <Text className="text-sm text-gray-500">
          Your feedback is appreciated.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
