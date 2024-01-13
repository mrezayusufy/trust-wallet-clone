"use client";
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import Colors from '../src/constants/Colors';
export { ErrorBoundary } from 'expo-router';
export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...Ionicons.font,
  });
 
  React.useEffect(() => {
     
    if (error) throw error;
  }, [error]);

  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  
  return ( 
        <ThemeProvider value={DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false, headerTintColor: Colors.light.textLight }} />
            <Stack.Screen name="send" options={{ presentation: 'modal', animation: "slide_from_bottom" }} />
            <Stack.Screen name="receive" options={{ presentation: 'modal', animation: "slide_from_bottom" }} />
            <Stack.Screen name="swap" options={{ presentation: 'modal', animation: "slide_from_bottom" }} />
            <Stack.Screen name="buy" options={{ presentation: 'modal', animation: "slide_from_bottom"  }} />
            <Stack.Screen name="crypto/[id]" options={{ presentation: 'modal', animation: "slide_from_bottom"  }} />
            <Stack.Screen name="transaction/[transaction]" options={{ presentation: 'modal', animation: "slide_from_bottom"  }} />
          </Stack>
        </ThemeProvider>
  );
}
