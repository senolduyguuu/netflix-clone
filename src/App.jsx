import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Header from './loyout/Header';
import HomePages from './pages/HomePages';
import LoginPages from './pages/LoginPages';
import WelcomePages from './pages/WelcomePages';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<p>hoş geldiniz</p>
				</Route>
				<Route path="/login">
					<Header></Header>
					<LoginPages />
				</Route>
				<Route path="/home">
					<Header></Header>
					<HomePages />
				</Route>
				<Route exact path="/welcome">
					<WelcomePages />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
