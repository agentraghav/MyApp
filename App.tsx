/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {styles} from './styles';

const minHeaderHeight = 70;
const maxHeaderHeight = Dimensions.get('window').height / 4;

import {
  SafeAreaView,
  FlatList,
  Text,
  Dimensions,
  View,
  NativeScrollEvent,
} from 'react-native';

const App = () => {
  // Dummy Data to show inside the scrollView
  var a = [];
  for (var i = 10; i < 30; i++) {
    a.push({
      item: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    });
  }

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const scrollPosition = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler((event: NativeScrollEvent) => {
    scrollPosition.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollPosition.value,
      [0, 500],
      [maxHeaderHeight, minHeaderHeight],
      Extrapolate.CLAMP,
    );
    return {
      height: height,
    };
  }, []);

  const width = (26 * Dimensions.get('window').width) / 100;
  const height = (3 * Dimensions.get('window').height) / 100;

  const imgViewStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollPosition.value,
      [0, 400],
      [width, 25],
      Extrapolate.CLAMP,
    );
    const translateY = interpolate(
      scrollPosition.value,
      [0, 400],
      [height, 15],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{translateX: translateX}, {translateY: translateY}],
    };
  }, []);

  const textStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollPosition.value,
      [0, 100, 200, 300, 400],
      [0, 0, 0, 0, 1],
      Extrapolate.CLAMP,
    );
    return {
      opacity: opacity,
    };
  }, []);

  const imgStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollPosition.value,
      [0, 400],
      [88, 26],
      Extrapolate.CLAMP,
    );
    return {
      height: height,
      width: height,
      borderRadius: height / 2,
    };
  }, []);

  const nameStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollPosition.value,
      [0, 200, 250],
      [1, 0.5, 0],
      Extrapolate.CLAMP,
    );
    return {
      opacity: opacity,
    };
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Animated.Text style={[textStyle, styles.headerName]}>
          John Doe
        </Animated.Text>
        <Animated.View style={[headerStyle, styles.header]}>
          <Animated.View style={styles.contentRow}>
            <Animated.View style={[imgViewStyle]}>
              <Animated.View style={styles.profileDetailRow}>
                <Animated.Image
                  style={imgStyle}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                  }}
                />
              </Animated.View>
              <Animated.Text style={[nameStyle, styles.name]}>
                John Doe
              </Animated.Text>
            </Animated.View>
          </Animated.View>
        </Animated.View>
        <AnimatedFlatList
          onScroll={handleScroll}
          data={a}
          scrollEventThrottle={16}
          style={{paddingTop: maxHeaderHeight}}
          renderItem={({item, index}: any) => {
            return (
              <View key={index} style={styles.scrollContent}>
                <View key={i}>
                  <Text>{item?.item}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
