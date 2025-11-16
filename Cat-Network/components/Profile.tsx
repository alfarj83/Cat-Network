import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const NAV_HEIGHT = 80;

const Profile: React.FC = () => {
  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* top bar */}
        <View style={styles.topBar}>
          <TouchableOpacity>
            <View style={styles.menuIcon}>
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
            </View>
          </TouchableOpacity>

          <View style={styles.avatar} />
        </View>

        {/* greeting */}
        <View style={styles.headerText}>
          <Text style={styles.hello}>Hello Jamie,</Text>
          <Text style={styles.subText}>
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </Text>
        </View>

        {/* two main cards */}
        <View style={styles.mainCardsRow}>
          <LinearGradient
            colors={["#45c853", "#1e9c3e"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.mainCard}
          >
            <View style={styles.iconCircle}>
              <Ionicons name="paw" size={26} color="#fff" />
            </View>
            <Text style={styles.mainCardTitle}>Recent entries</Text>
            <Text style={styles.mainCardCaption}>8 animals</Text>
          </LinearGradient>

          <LinearGradient
            colors={["#3866c9", "#244389"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.mainCard}
          >
            <View style={[styles.iconCircle, { backgroundColor: "#274ba5" }]}>
              <Ionicons name="people" size={24} color="#fff" />
            </View>
            <Text style={styles.mainCardTitle}>Friend Feed</Text>
            <Text style={styles.mainCardCaption}>5 new posts</Text>
          </LinearGradient>
        </View>

        {/* tabs */}
        <View style={styles.tabsRow}>
          <Text style={[styles.tab, styles.tabActive]}>Today</Text>
          <Text style={styles.tab}>This Week</Text>
          <Text style={styles.tab}>This Month</Text>
        </View>

        {/* green notification card */}
        <View style={[styles.noticeCard, { backgroundColor: "#83d56c" }]}>
          <View style={styles.noticeAvatar} />
          <Text style={styles.noticeText}>Does Mitty have a home yet?</Text>
          <View style={styles.noticeBadge}>
            <Ionicons name="close" size={16} color="#fff" />
          </View>
        </View>

        {/* blue notification card */}
        <View style={[styles.noticeCard, { backgroundColor: "#3e8fd6" }]}>
          <View style={styles.noticeAvatarStack}>
            <View style={[styles.noticeAvatar, styles.avatarBack]} />
            <View style={[styles.noticeAvatar, styles.avatarFront]} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.noticeText, { color: "#e8f4ff" }]}>
              3 friends have volunteered with shelters!
            </Text>
          </View>
          <TouchableOpacity style={styles.noticeButton}>
            <Text style={styles.noticeButtonText}>Check it out</Text>
          </TouchableOpacity>
        </View>

        {/* friends row */}
        <Text style={styles.sectionTitle}>Friends</Text>
        <View style={styles.friendsRow}>
          <View style={styles.friendCircle} />
          <View style={styles.friendCircle} />
          <View style={styles.friendCircle} />
          <TouchableOpacity style={styles.friendAdd}>
            <Text style={styles.friendAddText}>+ Add</Text>
          </TouchableOpacity>
        </View>

        {/* spacer for bottom nav */}
        <View style={{ height: NAV_HEIGHT + 40 }} />
      </ScrollView>
    </View>
  );
};

/* styles */

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContent: {
    paddingTop: 40,
    paddingHorizontal: 18,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIcon: {
    paddingVertical: 6,
    justifyContent: "space-between",
    height: 20,
  },
  menuLine: {
    width: 22,
    height: 2,
    borderRadius: 1,
    backgroundColor: "#333",
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#e1e1e1",
  },

  headerText: {
    marginTop: 24,
  },
  hello: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 4,
  },
  subText: {
    fontSize: 13,
    color: "#555",
  },

  mainCardsRow: {
    flexDirection: "row",
    marginTop: 24,
    justifyContent: "space-between",
  },
  mainCard: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    marginRight: 10,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  mainCardTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  mainCardCaption: {
    color: "#e0ffe6",
    fontSize: 12,
    marginTop: 2,
  },

  tabsRow: {
    flexDirection: "row",
    marginTop: 22,
    marginBottom: 12,
  },
  tab: {
    marginRight: 18,
    fontSize: 13,
    color: "#777",
  },
  tabActive: {
    color: "#2f6ed5",
    fontWeight: "700",
  },

  noticeCard: {
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  noticeAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#e8f2e4",
    marginRight: 10,
  },
  noticeText: {
    flex: 1,
    fontSize: 13,
    color: "#1d3b1f",
  },
  noticeBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#d93a3a",
    alignItems: "center",
    justifyContent: "center",
  },

  noticeAvatarStack: {
    flexDirection: "row",
    marginRight: 10,
  },
  avatarBack: {
    backgroundColor: "#cde6ff",
    marginRight: -14,
  },
  avatarFront: {
    backgroundColor: "#f6fbff",
  },
  noticeButton: {
    borderWidth: 1,
    borderColor: "#8dc1ff",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  noticeButtonText: {
    color: "#e2f1ff",
    fontSize: 11,
  },

  sectionTitle: {
    marginTop: 12,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
  },
  friendsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  friendCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#e4e4e4",
    marginRight: 10,
  },
  friendAdd: {
    marginLeft: 4,
  },
  friendAddText: {
    fontSize: 13,
    color: "#2f6ed5",
    fontWeight: "600",
  },

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: NAV_HEIGHT,
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    paddingBottom: 6,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
  },
  navLabel: {
    fontSize: 11,
    color: "#35b44c",
    marginTop: 2,
  },

  addWrapper: {
    position: "absolute",
    top: -30,
    alignSelf: "center",
  },
  addOuter: {
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 4,
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 8,
  },
  addInner: {
    flex: 1,
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
