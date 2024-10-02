import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../constants'; // Assuming you have a COLORS file for theme colors

// Assume you have an auth context or a function to handle sign out
const Settings = ({navigation}) => {
  const handleLogout = () => {
    // Perform the logout logic here (e.g., clearing tokens, resetting state)
    // For example:
    // authContext.signOut();

    // Navigate back to LoginScreen after logout
    navigation.replace('Intro'); // Ensure the user can't go back to the previous screen
    Alert.alert('You are Signed out ');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar configuration */}
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <ScrollView
        contentContainerStyle={[styles.scrollContainer, {paddingBottom: 60}]}>
        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity style={styles.item}>
            <Ionicons name="person-outline" size={24} color={COLORS.primary} />
            <Text style={styles.itemText}>Profile</Text>
            <Feather name="chevron-right" size={24} color={COLORS.gray} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <MaterialIcons
              name="lock-outline"
              size={24}
              color={COLORS.primary}
            />
            <Text style={styles.itemText}>Privacy</Text>
            <Feather name="chevron-right" size={24} color={COLORS.gray} />
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <TouchableOpacity style={styles.item}>
            <Ionicons name="moon-outline" size={24} color={COLORS.primary} />
            <Text style={styles.itemText}>Dark Mode</Text>
            <Feather name="chevron-right" size={24} color={COLORS.gray} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <FontAwesome name="globe" size={24} color={COLORS.primary} />
            <Text style={styles.itemText}>Language</Text>
            <Feather name="chevron-right" size={24} color={COLORS.gray} />
          </TouchableOpacity>
        </View>

        {/* Notifications Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <TouchableOpacity style={styles.item}>
            <MaterialIcons
              name="notifications-none"
              size={24}
              color={COLORS.primary}
            />
            <Text style={styles.itemText}>Push Notifications</Text>
            <Feather name="chevron-right" size={24} color={COLORS.gray} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <FontAwesome name="bell-o" size={24} color={COLORS.primary} />
            <Text style={styles.itemText}>Email Notifications</Text>
            <Feather name="chevron-right" size={24} color={COLORS.gray} />
          </TouchableOpacity>
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <TouchableOpacity style={styles.item}>
            <Ionicons
              name="help-circle-outline"
              size={24}
              color={COLORS.primary}
            />
            <Text style={styles.itemText}>Help Center</Text>
            <Feather name="chevron-right" size={24} color={COLORS.gray} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <MaterialIcons name="feedback" size={24} color={COLORS.primary} />
            <Text style={styles.itemText}>Send Feedback</Text>
            <Feather name="chevron-right" size={24} color={COLORS.gray} />
          </TouchableOpacity>

          {/* Sign Out Section */}
          <TouchableOpacity style={styles.item} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={24} color={COLORS.primary} />
            <Text style={styles.itemText}>Sign Out</Text>
            <Feather name="chevron-right" size={24} color={COLORS.gray} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    top: 20,
    paddingBottom: 40,
  },
  header: {
    marginTop: -20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    zIndex: 1,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingTop: 5,
  },
  section: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  itemText: {
    fontSize: 16,
    color: COLORS.primary,
  },
});

export default Settings;
