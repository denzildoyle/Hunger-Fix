import { createAppContainer, createStackNavigator } from 'react-navigation';
import Locations from './screens/Locations';
import Home from './screens/Home';

const NavStack = createStackNavigator(
{
	Home: {
		screen: Home,
	},
	Locations: {
		screen: Locations,
	},
}, 
{ 
	initialRouteName: 'Home',
	headerMode: 'none'
});

const App = createAppContainer(NavStack);
export default App;