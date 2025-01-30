import { useEffect, useState } from "react";
import axios from "axios";
import { Superhero } from "../../types";
import "./SuperheroList.css";

const API_URL = "/api/superheroes";

const SuperheroList = () => {
	const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

	useEffect(() => {
		fetchSuperheroes();
	}, [superheroes]);

	const fetchSuperheroes = async () => {
		try {
			const response = await axios.get<Superhero[]>(API_URL);
			setSuperheroes(response.data);
		} catch (error) {
			console.error("Error fetching superheroes:", error);
		}
	};

	return (
		<div>
			<h2>Superhero List</h2>
			<table className="superhero-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Superpower</th>
						<th>Humility</th>
					</tr>
				</thead>
				<tbody>
					{superheroes.map((hero) => (
						<tr key={hero.name}>
							<td>{hero.name}</td>
							<td>{hero.superpower}</td>
							<td>{hero.humility}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SuperheroList;
