import { createAppContainer, createStackNavigator } from 'react-navigation';
import LocationScreen from './screens/Locations';
import HomeScreen from './screens/Home';
import MapScreen from './screens/Map';

const NavStack = createStackNavigator(
{
	Home: {
		screen: HomeScreen,
	},
	Map: {
		screen: MapScreen,
	},
	Locations: {
		screen: LocationScreen,
	},
}, 
{ 
	initialRouteName: 'Home',
	headerMode: 'none'
});

const App = createAppContainer(NavStack);
export default App;