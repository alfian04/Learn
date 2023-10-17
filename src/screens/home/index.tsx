import {View, SafeAreaView, FlatList, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import SearchBar from '../../components/search/search';
import {homeStyle} from './home.style';
import Card from '../../components/card';
import {request} from '../../helpers/config/request';
import {IMovie} from '../../helpers/interface/movie';

export default function Home() {
  const [popular, setPopular] = useState([]);
  const [Latest, setLatest] = useState([]);

  const getPopularMoview = useCallback(async () => {
    try {
      const res = await request('movie/popular', 'GET');
      setPopular(res.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getLatestMovie = useCallback(async () => {
    try {
      const res = await request('movie/now_playing', 'GET');
      setLatest(res.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPopularMoview();
    getLatestMovie();
  }, [getPopularMoview, getLatestMovie]);

  const renderPopularMovie = ({item}: {item: IMovie}) => {
    return (
      <View style={{marginRight: 20}}>
        <Card
          title={item.original_title}
          rating={item.vote_average}
          image={item.backdrop_path}
        />
      </View>
    );
  };

  const renderForHeaderComponent = () => {
    return (
      <View style={{marginTop: 5}}>
        <View>
          <Text
            style={homeStyle.textmostpopular}>
            Most Popular
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{gap: 16}}
            horizontal
            data={popular}
            renderItem={renderPopularMovie}
          />
        </View>
        <Text
          style={homeStyle.textlatest}>
          Latest
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={homeStyle.container}>
        <SearchBar />

        <FlatList
          contentContainerStyle={{gap: 20}}
          ListHeaderComponent={renderForHeaderComponent}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={Latest}
          renderItem={renderPopularMovie}
        />
      </View>
    </SafeAreaView>
  );
}
