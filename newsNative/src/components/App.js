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
  return <Button title="Tap to view course" onPress={handlePress} />;
};

// const App = () => (
//   <View>
//     <Appbar styles={styles.bar}>
//       <Appbar.Content title="Courses"/>
//     </Appbar>
//     <FlatList 
//       data={courses}
//       renderItem={({item}) =>
//       <Card>
//         <Card.Cover source={{url: item.image}} />
//         <Card.Content>
//           <Title>{item.title}</Title>
//           <Paragraph>{item.description}</Paragraph>
//         </Card.Content>
//         <Card.Actions>
//           <OpenURLButton url={item.link}/>
//         </Card.Actions>
//       </Card>
//       }
//     />
//   </View>
// )

const App = () => {
    return (
      <View style={styles.bar}>
      {/* <Text style={[styles.bigBlue]}>I am rocking the color blue</Text> */}
      <Appbar styles={styles.bar}>
       <Appbar.Content title="Courses"/>
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
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default App;