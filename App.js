import React from 'react';
import {
  StatusBar,
  View
} from 'react-native';
import DeckMain from './components/DeckMain';
import DeckDetail from './components/DeckDetail';
import AddEntry from './components/AddEntry';
import AddQuestion from './components/AddQuestion';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';


function CustomStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        {...props}
      />
    </View>
  );
}


const Tabs = TabNavigator({
  Decks: {
    screen: DeckMain,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={30} color={tintColor} />
    }
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />
    }
  }
});

const MainNavigator =  StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: "Card Decks",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "purple"

      }
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "purple"

      }
    }
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "purple"

      }
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomStatusBar
          backgroundColor="purple"
          barStyle="light-content"
        />
        <MainNavigator />
      </View>
    );
  }
}
