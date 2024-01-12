"use client";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link, Stack, Tabs } from "expo-router";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Colors from "../../src/constants/Colors";

function TabBarIcon(props: {
  name: React.ComponentType<typeof Ionicons>["name"];
  color: string;
}) {
  // @ts-ignore
  return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  return (
      <SafeAreaView className="flex-1">
        <Stack.Screen options={{ statusBarColor: Colors.light.primary}}/>
        <Tabs
          screenOptions={{
            tabBarStyle: styles.header,            
            tabBarLabelStyle: styles.labelStyle,
            tabBarInactiveTintColor: "gray", 
            tabBarActiveTintColor: Colors.light.primaryTint,
            headerShown: true,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              headerStyle: styles.screenHeader, 
              title: "Wallet",
              headerTitle: "",
              headerShadowVisible: false,
              tabBarIcon: ({ color }: {color: string}) => <TabBarIcon name="shield" color={color} />,
              headerLeft: () => (<View className="px-5"><TabBarIcon name="notifications-outline" color={Colors.light.textLight}/></View>),
              headerRight: () => (<View className="px-5"><TabBarIcon name="options-outline" color={Colors.light.textLight}/></View>),
            }}
          />
          <Tabs.Screen
            name="discover"
            options={{
              title: "Discover",
              tabBarIcon: ({ color }: {color: string}) => (
                <TabBarIcon name="compass" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="browser"
            options={{
              title: "Browser",
              tabBarIcon: ({ color }: {color: string}) => (
                <TabBarIcon name="grid" color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="settings"
            options={{
              title: "Settings",
              tabBarIcon: ({ color }: {color: string}) => (
                <TabBarIcon name="settings-sharp" color={color} />
              ),
            }}
          />
        </Tabs>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenHeader: {
    backgroundColor: Colors.light.primary, 
  },
  header: {
    minHeight: 65,
    paddingVertical: 10,
  },
  labelStyle: {
    fontSize: 12,
    fontWeight: "500",
    paddingBottom: 10
  }
});