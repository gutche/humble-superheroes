import SuperheroForm from "./components/SuperheroForm/SuperheroForm";
import SuperheroList from "./components/SuperheroList/SuperheroList";
import "./App.css";

export default function App() {
	return (
		<div className="wrapper">
			<h1>Humble Superheroes</h1>
			<SuperheroForm />
			<SuperheroList />
		</div>
	);
}
