import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, images} from '../constants';
import Button from '../conponents/Button'; // Make sure this is correctly referenced

const Intro = ({navigation}) => {
  return (
    <ImageBackground source={images.background} style={{flex: 1}}>
      {/* Use native StatusBar */}
      <StatusBar hidden />

      <View style={{flex: 3, padding: 16, marginTop: 22}}>
        <View style={styles.circleViewContainer}>
          <View
            style={[
              styles.circleView,
              {
                borderBottomStartRadius: 0,
                backgroundColor: COLORS.secondary,
              },
            ]}>
            <Image
              source={images.girl1}
              resizeMode="cover"
              style={{
                width: (SIZES.width - 32) / 2 - 8,
                height: (SIZES.width - 32) / 2 + 8,
              }}
            />
          </View>
          <View style={styles.circleView}>
            <Image
              source={images.girl2}
              resizeMode="cover"
              style={{
                width: (SIZES.width - 32) / 2 - 8,
                height: (SIZES.width - 32) / 2 + 26,
                bottom: 16,
              }}
            />
          </View>
        </View>
        <View style={styles.circleViewContainer}>
          <View style={styles.circleView}>
            <Image
              source={images.guy1}
              resizeMode="cover"
              style={{
                width: (SIZES.width - 32) / 2 - 8,
                height: (SIZES.width - 32) / 2 + 26,
                bottom: 16,
              }}
            />
          </View>
          <View
            style={[
              styles.circleView,
              {
                borderBottomEndRadius: 0,
                backgroundColor: COLORS.secondary,
              },
            ]}>
            <Image
              source={images.guy2}
              resizeMode="cover"
              style={{
                width: (SIZES.width - 32) / 2 - 8,
                height: (SIZES.width - 32) / 2 + 4,
                bottom: 6,
                left: 39,
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomTitle}>
          Enjoy the Calling and Stay in touch with friends
        </Text>
        <Text style={styles.bottomSubtitle}>
          Connect people around the world
        </Text>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('LoginScreen')}
          style={{
            marginVertical: 24,
            width: SIZES.width - 64,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 16,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: 'white',
              fontFamily: 'medium',
              paddingBottom: 10,
            }}>
            Powered by{' '}
          </Text>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.black,
              fontFamily: 'semiBold',
              paddingBottom: 10,
            }}>
            Syed Abdullah
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 2,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: 'center',
    padding: 16,
  },
  bottomTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    margin: 12,
  },
  bottomSubtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    margin: 12,
  },
  circleViewContainer: {
    width: SIZES.width - 32,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  circleView: {
    width: (SIZES.width - 32) / 2 - 8,
    height: (SIZES.width - 32) / 2 - 8,
    borderRadius: 9999,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
});

export default Intro;
