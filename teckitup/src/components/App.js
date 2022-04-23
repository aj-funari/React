import React, { useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Linking, Button, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Appbar } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import courses from '../data/courses.json';
import pictures from '../data/pictures.json'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';

// IMPORTING STYLES FROM FILE
// If importing stylew from AppStyles file, uncomment the line below
// import styles from '../styles/AppStyles';

// BUTTON
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

// BUTTON WITH STYLE
const AppButton = ({ title, size, backgroundColor, name }) => {
  const navigation = useNavigation();
    return (
       <TouchableOpacity
          onPress={() =>
            navigation.navigate(name, {name: 'Mission Statement' })  // choose page to navigate to here
          }
          style={[
            styles.appButtonContainer,
            size === "sm" && {
              paddingHorizontal: 8,
              paddingVertical: 6,
              elevation: 6
            },
            size === "lg" && {
              paddingHorizontal: 4,
              paddingVertical: 3,
              elevation: 3
            },
            backgroundColor && { backgroundColor }
          ]}
        >
        <Text style={[styles.appButtonText, size === "lg" && { fontSize: 14 }]}>
          {title}
        </Text>
      </TouchableOpacity>
    )
};

// NAVIGATING BETWEEN SCREENS 
const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList 
        data={pictures}
        renderItem={({item}) =>
        <Card>
          <Card>
            <Text style={styles.title}>teckitup</Text>
          </Card>
          <Card.Cover style={styles.marg10} source={{url: item.image}} />
        </Card>
        }
      />
      <AppButton title="Mission Statement" size="sm" backgroundColor="#61dafb" name="Mission" />
      <AppButton title="About AJ Funari" size="sm" backgroundColor="#61dafb" name="Profile" />
      <AppButton title="Products" size="sm" backgroundColor="#61dafb" name="Products" />
    </View>
  );
};

const MissionStatement = ({ navigation, route }) => {
  return (
    <Text>{route.params.name} Page</Text>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return (
    // <Text>This is {route.params.name}'s profile</Text>,
    <View>
      <Appbar>
        <Appbar.Content title="Chief Executive Officer"/>
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

const Products = ({ navigation, route }) => {
  return (
    <Text>{route.params.name} Page</Text>
  );
};

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
          <Stack.Screen 
            name="Mission"
            component={MissionStatement}
            options={{ title: 'Mission Statement' }} 
          />
          <Stack.Screen 
            name="Profile"
            component={ProfileScreen}
            options={{ title: 'AJ Funari' }} 
          />
          <Stack.Screen 
            name="Products"
            component={Products}
            options={{ title: 'Products' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};


const styles = StyleSheet.create({
  marg10: {
    marginTop: 10,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "black",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold"
  },
  appButtonContainer: {
    marginTop: 5,
    elevation: 8,
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#20232a",
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default App;

