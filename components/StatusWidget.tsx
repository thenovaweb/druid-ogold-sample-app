import { styles } from "@/assets/styles/styles";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { getWidgetInfo } from "druid-ogold-rn-sdk";
import { changeCase } from "@/utils/helper";

export const StatusWidget = () => {
  const [kycStatus, setKycStatus] = useState("Loading...");
  const [description, setDescription] = useState("Please wait a moment, while we fetch the status of the KYC.");
  const [buttonText, setButtonText] = useState("Loading...");

  const statusStyle: any = {
    loading: styles.progress,
    accepted: styles.accepted,
    rejected: styles.error,
    draft: styles.progress,
    enhanced: styles.pending,
    failure: styles.error,
    inactive: styles.neutral,
  };

  const buttonStyle: any = {
    accepted: styles.gold,
    rejected: styles.error,
    draft: styles.progress,
    enhanced: styles.pending,
    failure: styles.neutral,
    inactive: styles.neutral,
  };

  useEffect(() => {
    (async () => {
      await fetchWidgetInfo();
    })();
  }, []);

  // This fetches the application status of the user. Based on the status, custom styling can be done to the buttons and status badge.
  const fetchWidgetInfo = async () => {
    const widgetData: any = {
      clientSecret: process.env.EXPO_PUBLIC_CLIENT_SECRET,
      clientUuid: process.env.EXPO_PUBLIC_CLIENT_UUID,
      phoneNumber: process.env.EXPO_PUBLIC_CLIENT_PHONE,
    };
    const result: any = await getWidgetInfo(widgetData);
    setKycStatus(changeCase(result["status"]));
    setButtonText(result["buttonText"]);
    setDescription(result["description"]);
  };

  // This should point to where the onboarding workflow screen is defined
  const navigateToScreen = () => {
    router.push({ pathname: "/onboard" });
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>KYC Process</Text>
        </View>
        <TouchableOpacity
          style={[styles.statusButton, buttonStyle[kycStatus.toLowerCase()]]}
          onPress={navigateToScreen}>
          <Text style={styles.statusButtonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardBody}>
        <View style={[styles.kycStatus, statusStyle[kycStatus.toLowerCase()]]}>
          <Text style={styles.statusBadgeText}>{kycStatus}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};
