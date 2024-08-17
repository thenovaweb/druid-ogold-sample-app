import React from "react";
import { View } from "react-native";
import { styles } from "@/assets/styles/styles";
import { StatusWidget } from "@/components/StatusWidget";
import { LiveRates } from "@/components/LiveRates";
import { TopHeader } from "@/components/TopHeader";
import { Wallet } from "@/components/Wallet";
import { Portfolio } from "@/components/Portfolio";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TopHeader />

      <LiveRates />

      <StatusWidget />

      <Wallet />

      <Portfolio />
    </View>
  );
};

export default HomeScreen;
