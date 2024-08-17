import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "@/assets/styles/styles";

export const LiveRates = () => {
  return (
    <View>
      <View style={styles.liveRates}>
        <Text style={styles.liveRatesTitle}>Live Buy Rates</Text>
        <View style={styles.buySellButtons}>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buySellText}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sellButton}>
            <Text style={styles.buySellText}>Sell</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ratesContainer}>
        <View style={styles.rateCard}>
          <Text style={styles.rateType}>Gold /gm</Text>
          <Text style={styles.rateValue}>293.12 AED</Text>
          <Text style={styles.rateChange}>-0.2%</Text>
        </View>
        <View style={styles.rateCard}>
          <Text style={styles.rateType}>Silver /gm</Text>
          <Text style={styles.rateValue}>3.78 AED</Text>
          <Text style={styles.rateChange}>-0.53%</Text>
        </View>
      </View>
    </View>
  );
};
