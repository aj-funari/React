import React, { useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Linking, Button, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Appbar } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import ajfunari from "../data/ajfunari.json"
import pictures from '../data/pictures.json'

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

// BUTTON STYLING
const AppButton = ({ title, size, backgroundColor, name }) => {
  const navigation = useNavigation();
    return (
       <TouchableOpacity
          onPress={() =>
            navigation.navigate(name, {name: name })  // choose page to navigate to here
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
}

// NAVIGATING BETWEEN SCREENS 
const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList 
        data={pictures}
        renderItem={({item}) =>
        <Card>
          <Text style={styles.title}>teckitup</Text>
          <Card.Cover style={styles.marg20} source={{url: item.image}} />
          <AppButton title="About AJ Funari" size="sm" backgroundColor="#61dafb" name="Profile" />
          <AppButton title="Mission Statement" size="sm" backgroundColor="#61dafb" name="Mission Statement" />
          <AppButton title="Products" size="sm" backgroundColor="#61dafb" name="Products" />
          <AppButton title="Social Media" size="sm" backgroundColor="#61dafb" name="Social Media" />
        </Card>
        }
      />
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text style={styles.title}>Chief Executive Officer</Text>
      <FlatList 
        data={ajfunari}
        renderItem={({item}) =>
        <Card>
          <Card.Cover style={styles.marg20} source={{url: item.image}} />
          <Card.Content>
            <Title style={styles.marg20}>{item.title}</Title>
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

const MissionStatement = ({ navigation, route }) => {
  return (
    <View>
      <Text style={styles.title}>Mission Statement</Text>
    </View>
  );
};

const Products = ({ navigation, route }) => {
  return (
    <Text style={styles.title}>Products Page</Text>
  );
};

const SocialMedia = ({ navigation, route }) => {
  return (
    <View>
      <Text style={styles.title}>Social Media Page</Text>
    </View>
  );
};

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen 
            name="Mission Statement"
            component={MissionStatement}
          />
          <Stack.Screen 
            name="Profile"
            component={ProfileScreen}
          />
          <Stack.Screen 
            name="Products"
            component={Products}
          />
          <Stack.Screen 
            name="Social Media"
            component={SocialMedia}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  marg20: {
    marginTop: 20,
  },
  title: {
    marginTop: 20,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "black",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  appButtonContainer: {
    marginTop: 20,
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

