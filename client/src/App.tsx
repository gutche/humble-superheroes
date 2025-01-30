import SuperheroForm from "./components/SuperheroForm/SuperheroForm";
import SuperheroList from "./components/SuperheroList/SuperheroList";
import "./App.css";
import { useState } from "react";

export default function App() {
	const [triggerUpdate, setTriggerUpdate] = useState<number>(0);

	const handleAddSuperhero = () => {
		setTriggerUpdate((prev) => prev + 1); // Increment the trigger to force a re-render
	};
	return (
		<div className="wrapper">
			<h1>Humble Superheroes</h1>
			<SuperheroForm onAdd={handleAddSuperhero} />
			<SuperheroList key={triggerUpdate} />
		</div>
	);
}
