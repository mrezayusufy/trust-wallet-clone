"use client";
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import Colors from '../src/constants/Colors';
export { ErrorBoundary } from 'expo-router';
import * as SQLite from 'expo-sqlite';
import { coinList } from '../src/constants/coinList';
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
  const initDatabase = async (db: SQLiteDatabase ) => {
    await db.execAsync(` 
      DROP TABLE IF EXISTS coins;
      CREATE TABLE IF NOT EXISTS coins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        price REAL,
        amount REAL,
        icon TEXT,
        currency TEXT,
        coin TEXT,
        percentage REAL,
        fiat REAL
      )
    `); 
    
    for (const c of coinList) {
      await db.runAsync(`
        INSERT INTO coins (title, coin, icon, amount, price, currency, percentage, fiat)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `, c.title, c.coin, c.icon, c.amount, c.price, c.currency, c.percentage, c.fiat);
    }
  }; 
  return ( 
      <SQLiteProvider databaseName="trust_db.db" onInit={initDatabase}>
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
      </SQLiteProvider > 
  );
}
