import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 20000); // show splash for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-blue-600">
        <Text className="text-4xl font-bold text-white animate-pulse">
          nutriGhana
        </Text>
      </View>
    );
  }
};

export default Index;
