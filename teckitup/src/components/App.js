/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback } from 'react';
import {Card, Title, Paragraph, Appbar} from 'react-native-paper'
import {View, Text, FlatList, StyleSheet, Linking, Button} from 'react-native';
import courses from '../data/courses.json';
// import styles from '../styles/AppStyles';

const OpenURLButton = ({ url }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open URL: " + link)
    }
  });
  return <Button title="Tap to follow link" onPress={handlePress} />;
};

const App = () => {
    return (
      <View style={styles.bar}>
        <Appbar>
          <Appbar.Content title="ALEC FUNARI PORTFOLIO"/>
        </Appbar>
        <FlatList 
          data={courses}
          renderItem={({item}) =>
          <Card>
            <Card.Cover source={{url: item.image}} />
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <OpenURLButton url={item.link}/>
            </Card.Actions>
          </Card>
          }
        />
      </View>
    );
};

const styles = StyleSheet.create({
  bar: {
    marginTop: 50,
  },
});
``
export default App;