import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  widgetContainer: {
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e8c972",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  profileText: {
    color: "gray",
    fontWeight: "bold",
  },
  greeting: {
    color: "white",
    fontSize: 14,
  },
  userName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  headerIcons: {
    flexDirection: "row",
  },
  liveRates: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  liveRatesTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buySellButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  buyButton: {
    backgroundColor: "#e8c972",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  sellButton: {
    backgroundColor: "#424242",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buySellText: {
    color: "white",
    fontSize: 16,
  },
  ratesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  rateCard: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 10,
  },
  rateType: {
    color: "gold",
    fontSize: 16,
  },
  rateValue: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  rateChange: {
    color: "red",
    fontSize: 16,
    marginTop: 5,
  },
  kycContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  walletContainer: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
  },
  walletHead: {
    flex: 1,
    alignContent: "center",
  },
  walletTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  walletDescription: {
    color: "gray",
    fontSize: 14,
    marginVertical: 10,
    paddingTop: 10,
  },
  depositButton: {
    backgroundColor: "#e8c972",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: "flex-end",
    marginTop: -25,
  },
  depositText: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
  portfolioContainer: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  portfolioTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  portfolioDescription: {
    color: "gray",
    fontSize: 14,
    marginVertical: 10,
  },
  portfolioItems: {
    borderTopColor: "#333",
    borderTopWidth: 1,
    paddingTop: 10,
  },
  portfolioItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  portfolioItemType: {
    color: "white",
    fontSize: 16,
  },
  portfolioItemWeight: {
    color: "gray",
    fontSize: 16,
  },
  buyGoldButton: {
    borderColor: "#e8c972",
    borderWidth: 1.3,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  statusBadge: {
    borderColor: "#e8c972",
    borderWidth: 1.3,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: "white",
    display: "flex",
  },
  buySilverButton: {
    borderColor: "#C0C0C0",
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  // Widget Styles
  cardContainer: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  statusButton: {
    backgroundColor: "#e8c972",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  statusButtonText: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
  },
  cardBody: {
    marginTop: 5,
  },
  kycStatus: {
    backgroundColor: "#C0C0C0",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 50,
    color: "white",
    display: "flex",
    alignSelf: "flex-start",
  },
  gold: {
    backgroundColor: "#e8c972",
  },
  pending: {
    backgroundColor: "#e8c972",
  },
  accepted: {
    backgroundColor: "#98FB98",
  },
  draft: {
    backgroundColor: "#FFBF00",
  },
  error: {
    backgroundColor: "#E57373",
  },
  progress: {
    backgroundColor: "#ADD8E6",
  },
  inactive: {
    backgroundColor: "#A9A9A9",
  },
  neutral: {
    backgroundColor: "#C0C0C0",
  },
  statusBadgeText: {
    color: "black",
    fontSize: 13,
  },
  description: {
    color: "white",
    fontSize: 14,
    marginTop: 15,
  },
});
