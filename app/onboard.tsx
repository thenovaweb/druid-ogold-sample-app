import React from "react";
import { View, Text } from "react-native";
import { styles } from "@/assets/styles/styles";
import Widget from "druid-ogold-rn-sdk";
import { router } from "expo-router";

const WidgetScreen = () => {
  const redirectToHome = () => {
    router.push("/");
  };
  return (
    <View style={styles.widgetContainer}>
      <Widget
        clientSecret={process.env.EXPO_PUBLIC_CLIENT_SECRET!}
        clientUuid={process.env.EXPO_PUBLIC_CLIENT_UUID!}
        phone={process.env.EXPO_PUBLIC_CLIENT_PHONE!}
        onSuccess={redirectToHome}
      />
    </View>
  );
};

export default WidgetScreen;
