// app/CommunityScreen.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const tabs = ["Community", "Local Shelters", "Clinics"];

const posts = [
  {
    id: 1,
    user: "An Average Joe",
    time: "20 minutes ago",
    text: "I'm hearing a lot of animal noises at night.",
    accent: "#3ed15c",
  },
  {
    id: 2,
    user: "An Average Joe",
    time: "24 minutes ago",
    text: "I'm lowk scared guys",
    accent: "#3ed15c",
  },
  {
    id: 3,
    user: "Jemiegabie",
    time: "38 minutes ago",
    text: "it's probably ur mom",
    accent: "#ff5e7a",
  },
];

const CommunityScreen: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("Community");

  return (
    <View style={styles.root}>
      {/* Sky background */}
      <LinearGradient
        colors={["#8fd9ff", "#c5f3ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Main content */}
      <View style={styles.content}>
        {/* Search bar */}
        <View style={styles.searchWrapper}>
          <Ionicons name="search" size={20} color="#3c7a9b" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#6ea2be"
            style={styles.searchInput}
          />
        </View>

        {/* Tabs */}
        <View style={styles.tabsRow}>
          {tabs.map((t) => {
            const active = t === activeTab;
            return (
              <TouchableOpacity
                key={t}
                onPress={() => setActiveTab(t)}
                style={[styles.tabItem, active && styles.tabItemActive]}
              >
                <Text
                  style={[styles.tabText, active && styles.tabTextActive]}
                  numberOfLines={1}
                >
                  {t}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.sectionTitle}>Recent Posts</Text>

        {/* Posts card */}
        <ScrollView
          style={styles.card}
          contentContainerStyle={{ paddingBottom: 16 }}
        >
          {posts.map((p) => (
            <View key={p.id} style={styles.postRow}>
              {/* avatar */}
              <View style={styles.avatarOuter}>
                <LinearGradient
                  colors={["#b3ffcc", p.accent]}
                  style={styles.avatarInner}
                />
              </View>

              {/* post content */}
              <View style={styles.postBody}>
                <Text style={styles.postHeader}>
                  <Text style={[styles.username, { color: p.accent }]}>
                    {p.user}
                  </Text>
                  <Text style={styles.timeText}> · {p.time}</Text>
                </Text>
                <Text style={styles.postText}>{p.text}</Text>

                {/* actions */}
                <View style={styles.actionsRow}>
                  <View style={styles.actionsGroup}>
                    <Ionicons
                      name="chatbubble-ellipses-outline"
                      size={16}
                      color="#4f6c7a"
                    />
                    <Ionicons
                      name="repeat-outline"
                      size={16}
                      color="#4f6c7a"
                      style={{ marginLeft: 10 }}
                    />
                    <Ionicons
                      name="heart-outline"
                      size={16}
                      color="#4f6c7a"
                      style={{ marginLeft: 10 }}
                    />
                  </View>
                  <MaterialIcons
                    name="more-horiz"
                    size={18}
                    color="#4f6c7a"
                  />
                </View>
              </View>
            </View>
          ))}

          {/* reply area */}
          <View style={styles.replyBox}>
            <Text style={styles.replyHeader}>Write a reply</Text>
            <View style={styles.replyInput} />
            <View style={styles.pagination}>
              <View style={styles.pageBtn} />
              <View style={styles.pageBtn} />
              <View style={styles.pageBtn} />
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Bottom nav bar */}
      <BottomNavbar />
    </View>
  );
};

export default CommunityScreen;

/* ---------- Bottom navbar ---------- */

const BottomNavbar: React.FC = () => {
  return (
    <View style={styles.navWrapper}>
      <View style={styles.navBar}>
        <NavItem icon="map" label="Map" />
        <NavItem icon="shuffle" label="Shuffle" />
        <View style={{ width: 72 }} />
        <NavItem icon="chatbubbles" label="Talk" />
        <NavItem icon="person" label="Profile" />
      </View>

      <TouchableOpacity style={styles.centerButton}>
        <LinearGradient
          colors={["#48ff6c", "#0fa835"]}
          style={styles.centerInner}
        >
          <Text style={styles.plus}>+</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const NavItem = ({ icon, label }: { icon: any; label: string }) => (
  <TouchableOpacity style={styles.navItem}>
    <Ionicons name={icon} size={24} color="#0b7a23" />
    <Text style={styles.navLabel}>{label}</Text>
  </TouchableOpacity>
);

/* ---------- styles ---------- */

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#000" },

  content: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 90, // leave space for navbar
  },

  /* search */
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 20,
    height: 36,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.9)",
    marginBottom: 14,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#28526b",
  },

  /* tabs */
  tabsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  tabItem: {
    flex: 1,
    marginHorizontal: 4,
    height: 30,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.25)",
  },
  tabItemActive: {
    backgroundColor: "#4ee35f",
    borderColor: "#1b8f2d",
  },
  tabText: {
    fontSize: 12,
    color: "#28526b",
    fontWeight: "500",
  },
  tabTextActive: {
    color: "#0b3f15",
  },

  sectionTitle: {
    marginTop: 4,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#1c3651",
  },

  /* card / posts */
  card: {
    flex: 1,
    backgroundColor: "rgba(245,250,255,0.96)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#a7c7e6",
    paddingHorizontal: 10,
    paddingTop: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },

  postRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  avatarOuter: {
    width: 44,
    height: 44,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#2bb74a",
    marginRight: 8,
    overflow: "hidden",
    backgroundColor: "#b9ffcc",
  },
  avatarInner: {
    flex: 1,
  },

  postBody: {
    flex: 1,
    paddingBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d0e4f2",
  },
  postHeader: {
    marginBottom: 2,
  },
  username: {
    fontWeight: "600",
  },
  timeText: {
    color: "#6b7f8e",
    fontSize: 11,
  },
  postText: {
    fontSize: 13,
    color: "#2b3c44",
    marginBottom: 4,
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionsGroup: {
    flexDirection: "row",
    alig
