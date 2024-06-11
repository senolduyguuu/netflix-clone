import { useForm } from "react-hook-form";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import FormComponent from "./components/FormComponent";
import Header from './loyout/Header';
import HomePages from './pages/HomePages';
import LoginPages from './pages/LoginPages';
import WelcomePages from './pages/WelcomePages';
// eslint-disable-next-line no-unused-vars
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
function App() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			password: "",
			email: "",
		},
	})

	const onSubmit = (e) => {
		console.log(e)
	}

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<p>hoş geldiniz</p>
				</Route>
				<Route path="/login">
					<Header></Header>
					<FormComponent errors={errors} onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} watch={watch}></FormComponent>
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
