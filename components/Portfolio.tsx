import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "@/assets/styles/styles";

export const Portfolio = () => {
  return (
    <View style={styles.portfolioContainer}>
      <Text style={styles.portfolioTitle}>Portfolio</Text>
      <Text style={styles.portfolioDescription}>Buy Gold/Silver to add it to your portfolio.</Text>
      <View style={styles.portfolioItems}>
        <View style={styles.portfolioItem}>
          <Text style={styles.portfolioItemType}>Gold</Text>
          <Text style={styles.portfolioItemWeight}>0 gm</Text>
          <TouchableOpacity style={styles.buyGoldButton}>
            <Text style={styles.buySellText}>+ Buy Gold </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.portfolioItem}>
          <Text style={styles.portfolioItemType}>Silver</Text>
          <Text style={styles.portfolioItemWeight}>0 gm</Text>
          <TouchableOpacity style={styles.buySilverButton}>
            <Text style={styles.buySellText}>+ Buy Silver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
