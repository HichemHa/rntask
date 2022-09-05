/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {getCharactesList} from './redux/actions';
import {useDispatch, useSelector} from 'react-redux';

export default function App({navigation}) {
  const dispatch = useDispatch();

  const allUser = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(getCharactesList());
  }, []);
  console.log('allUser', allUser.users.users);
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          flexDirection: 'row',
          flexWrap: 'wrap',
          borderWidth: 1,
          borderColor: 'black',
        }}>
        {allUser.users.length === 0 ? (
          <Text>loading...</Text>
        ) : (
          allUser.users.users.map((el, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flexWrap: 'nowrap',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Seemore');
                  }}>
                  <ImageBackground
                    onPress={() => navigation.navigate('FormR')}
                    style={{
                      width: 150,
                      height: 150,
                      borderWidth: 1,
                      borderColor: 'black',
                      borderRadius: 5,
                    }}
                    source={{uri: el.image}}>
                    <Text>
                      {el.username} + {el.age}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            );
          })
        )}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },
  item: {
    width: '50%', // is 50% of container width
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
