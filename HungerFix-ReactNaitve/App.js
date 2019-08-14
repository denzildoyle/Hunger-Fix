import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import Locations from './components/Locations';
import Home from './components/Home';

const NavStack = createStackNavigator({
	Home: {
		screen: Home
	},
	Locations: {
		screen: Locations
	},
},{
    initialRouteName: 'Home'
});

const App = createAppContainer(NavStack);
export default App;