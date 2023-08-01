import React from "react";
import axios from "axios";
class Cars extends React.Component {
    state = {
        cars: [],
    };

    componentDidMount() {

        axios.get('http://owu.linkpc.net/carsAPI/v1/cars')
            .then((response) => {
                this.setState({ cars: response.data });
            })
            .catch((error) => {
                console.error('Error fetching cars:', error);
            });
    }

    render() {
        const { cars } = this.state;
        return (
            <div>
                <h2>Cars:</h2>
                <ul>
                    {cars.map((car) => (
                        <li key={car.id}> Brand:{car.brand} - Price: {car.price} - Year:{car.year}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default Cars