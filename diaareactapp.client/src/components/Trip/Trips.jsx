import { useEffect, useState } from 'react';
import axios from 'axios';

function Trips() {
	const [trips, setTrips] = useState();

	useEffect(() => {
		populateTripsData();
	}, []);

	const contents = trips === undefined
		? <p><em>Loading... </em></p>
		: <table className="table table-striped" aria-labelledby="tabelLabel">
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Date Started</th>
					<th>Date Completed</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{
					trips.map(trip =>
						<tr key={trip.id}>
							<td>{trip.name}</td>
							<td>{trip.description}</td>
							<td>{trip.dateStarted}</td>
							<td>{trip.dateCompleted}</td>
							<td> - </td>
						</tr>
					)
				}
			</tbody>
		</table>;

	return (
		<div>
			<h1 id="tabelLabel">Trips</h1>
			<p>This component demonstrates fetching data from the server.</p>
			{contents}
		</div>
	);

	function populateTripsData() {
		axios.get("api/Trips/GetTrips").then(result => {
			const response = result.data;
			if (response.constructor == Array) setTrips(response);
		});
	}
}

export default Trips;