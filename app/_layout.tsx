import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import DarkTheme from "../assets/theme/theme.json";

const theme = {
  ...DarkTheme,
  myOwnProperty: true,
  colors: {
    ...DarkTheme.colors,
    success: "#98FB98", // green
    inactive: "#A9A9A9", // stale metal color
    pending: "#FFBF00", // amber
    progress: "#ADD8E6", // light blue
    error: "#E57373", // light red
  },
};

/**
 * Stack provides stack navigation, giving us back button, title, animation
 * @returns
 * @returns
 */
export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="index"
          options={{
            contentStyle: {
              backgroundColor: theme.colors.background,
            },
          }}
        />
        <Stack.Screen
          name="onboard"
          options={{
            contentStyle: {
              backgroundColor: theme.colors.background,
            },
          }}
        />
      </Stack>
    </PaperProvider>
  );
}
