import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons, images} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import SocialButton from '../conponents/SocialButton'; // Ensure correct spelling
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '376988642576-uq712j9mp269dodgn6j8ffso45oic1so.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    // Get the user's ID token
    const {idToken} = await GoogleSignin.signIn();
    console.log({idToken});

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential (Firebase auth)
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    if (error.code) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          console.log('Sign-in operation already in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log('Play services not available or outdated');
          break;
        default:
          console.log('Unknown error occurred: ', error.message);
      }
    } else {
      console.log('Error: ', error.message);
    }
  }
}

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar hidden />
      <View style={styles.container}>
        <Image source={images.logo} resizeMode="contain" style={styles.logo} />
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Hello there! Continue with and listen to the stories from around the
          world
        </Text>
        <View style={{marginVertical: 32}}>
          <SocialButton
            title="Continue with Apple"
            icon={icons.appleLogo}
            onPress={() => navigation.navigate('Main')}
          />
          <SocialButton
            title="Continue With Google"
            icon={icons.google}
            onPress={async () => {
              try {
                await onGoogleButtonPress();
                Alert.alert('User Signed in using Google');
                navigation.navigate('Main');
              } catch (error) {
                Alert.alert('Error signing in', error.message);
              }
            }}
          />
          <SocialButton
            title="Continue With Email"
            icon={icons.email}
            onPress={() => navigation.navigate('Main')}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.loginTitle}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Text style={styles.loginSubtitle}>{'  '}Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomTitle}>
            By continuing, you agree to the terms and
          </Text>
          <TouchableOpacity>
            <Text style={styles.bottomSubtitle}>Privacy Policy.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    padding: 16,
  },
  logo: {
    width: 72,
    height: 72,
    marginBottom: 22,
    marginTop: -22,
  },
  title: {
    fontSize: 28,
    fontFamily: 'bold',
    color: COLORS.black,
    marginVertical: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'regular',
    color: COLORS.black,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  loginTitle: {
    fontSize: 14,
    fontFamily: 'regular',
    color: COLORS.black,
  },
  loginSubtitle: {
    fontSize: 14,
    fontFamily: 'semiBold',
    color: COLORS.primary,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 32,
    right: 0,
    left: 0,
    width: SIZES.width - 32,
    alignItems: 'center',
  },
  bottomTitle: {
    fontSize: 12,
    fontFamily: 'regular',
    color: COLORS.black,
  },
  bottomSubtitle: {
    fontSize: 12,
    fontFamily: 'regular',
    color: COLORS.secondary,
    textDecorationLine: 'underline',
    marginTop: 2,
  },
});

export default LoginScreen;
