import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "@/assets/styles/styles";

export const Wallet = () => {
  return (
    <View style={styles.walletContainer}>
      <Text style={styles.walletTitle}>Wallet Balance</Text>
      <TouchableOpacity style={styles.depositButton}>
        <Text style={styles.depositText}>+ Deposit</Text>
      </TouchableOpacity>
      <Text style={styles.walletDescription}>Deposit money in your wallet to purchase any item!</Text>
    </View>
  );
};
