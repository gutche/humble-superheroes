import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import { Superhero } from "../../types";
import "./SuperheroForm.css";

const API_URL = "/api/superheroes";

const SuperheroForm = () => {
	const [name, setName] = useState<string>("");
	const [superpower, setSuperpower] = useState<string>("");
	const [humility, setHumility] = useState<string>("");

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validate inputs
		if (
			!name ||
			!superpower ||
			Number(humility) < 1 ||
			Number(humility) > 10
		) {
			alert("Please enter valid superhero details.");
			return;
		}

		try {
			await axios.post<Superhero>(API_URL, {
				name,
				superpower,
				humility: Number(humility),
			});

			// Reset the form fields
			setName("");
			setSuperpower("");
			setHumility("");
		} catch (error) {
			console.error("Error adding superhero:", error);
		}
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		switch (name) {
			case "name":
				setName(value);
				break;
			case "superpower":
				setSuperpower(value);
				break;
			case "humility":
				setHumility(value);
				break;
			default:
				break;
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="name"
				placeholder="Superhero Name"
				value={name}
				onChange={handleInputChange}
				required
			/>
			<input
				type="text"
				name="superpower"
				placeholder="Superpower"
				value={superpower}
				onChange={handleInputChange}
				required
			/>
			<input
				type="number"
				name="humility"
				placeholder="Humility (1-10)"
				value={humility}
				onChange={handleInputChange}
				min="1"
				max="10"
				required
			/>
			<button type="submit">Add Superhero</button>
		</form>
	);
};

export default SuperheroForm;
