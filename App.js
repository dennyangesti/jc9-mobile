import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Icon } from 'native-base'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'

import AuthScreen from './src/auth/AuthScreen'
import ProfileScreen from './src/app/ProfileScreen'
import PhoneCall from './src/app/CallScreen'

import DiaryScreen from './src/app/DiaryScreen'
import AddDiaryScreen from './src/app/AddDiaryScreen'
import DetailDiaryScreen from './src/app/DetailDiaryScreen'

import STORE from './src/store/reducers/index'

const DiaryStack = createStackNavigator(
  {
    ListDiary: DiaryScreen,
    AddDiary: AddDiaryScreen,
    DetailDiary: DetailDiaryScreen
  },
  {
    headerMode: 'none'
  }
)


const MainTab = createBottomTabNavigator(
  {
    Call: {
      screen: PhoneCall,
      navigationOptions: {
        tabBarIcon: <Icon name='call' />
      }
    },
    Diary: {
      screen: DiaryStack,
      navigationOptions: {
        tabBarIcon: <Icon name='bookmarks' />
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: <Icon name='contact' />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'grey'
    }
  }
)

const RootStack = createStackNavigator(
  {
    Auth: AuthScreen,
    Main: MainTab
  },
  {
    headerMode: 'screen'
  }
)

const AppContainer = createAppContainer(RootStack)

class App extends Component {
  render() {
    return (
      <Provider store={STORE}>
        <AppContainer />
      </Provider>
    )
  }
}


export default App