import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableHighlight } from 'react-native';
import { useState } from 'react';
import Toast from 'react-native-toast-message';
import { ScrollView } from 'react-native';

import styles from './styles/styles';

import { AxiosApiCall, FetchApiCall } from './api/QuoteApi';
import { Button } from './components/button.component';

export default function App() {
  let [quote, setQuote] = useState('');
  let [source, setSource] = useState('');

  const handleAxiosApiCall = async () => {
    try {
      const { quote, source } = await AxiosApiCall();
      setQuote(quote);
      setSource(source);
    } catch (error) {
      if (error.name === 'TypeError') {
      } else {
        console.error('Произошла ошибка:', error);
      }
    }
  };

  const handleFetchApiCall = async () => {
    try {
      const { quote, source } = await FetchApiCall();
      setQuote(quote);
      setSource(source);
    } catch (error) {
      if (error.name === 'TypeError') {
      } else {
        console.error('Произошла ошибка:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Генерация случайных цитат</Text>
      <View style={styles.buttonContainer}>
        <Button title='Используя Fetch' onPress={handleFetchApiCall} />
        <Button title='Используя Axios' onPress={handleAxiosApiCall} />
      </View>
      <View style={styles.quoteContainer}>
        <ScrollView>
          <Text style={styles.quote}>{quote}</Text>
          <Text style={[styles.source, { color: 'red' }]}>{source}</Text>
        </ScrollView>
      </View>
      <StatusBar style='auto' />
      <Toast />
    </View>
  );
}
