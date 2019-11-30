import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import store from './src/_redux/store';
import Colors from './src/_utils/Colors';
import {Icon, Button} from 'native-base';


import BusinessesSearchScreen from './src/screens/BusinessesSearchScreen';
import BusinessesDetailScreen from './src/screens/BusinessesDetailScreen';

const AppNavigator = createStackNavigator({
  BusinessesSearch: {
    screen: BusinessesSearchScreen,
    navigationOptions: {
      headerTransparent: true,
      headerLeft: null
    }
  },
  BusinessesDetail: {
    screen: BusinessesDetailScreen,
    navigationOptions: (props) => {
      return {
        headerLeft: (
          <Button transparent onPress={()=>props.navigation.goBack()}>
            <Icon name="arrow-back" style={{marginLeft: 20, color:"#ecf0f1"}} />
          </Button>
        ),
        headerStyle: {
          backgroundColor: Colors.mainColor,
        },
        headerTitleStyle: {
          color: "#ecf0f1"
        }
      }
    }
  },
});

const RootNavigation = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )
}


console.disableYellowBox = true;
export default App;

