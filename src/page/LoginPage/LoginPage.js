import React, { useState, useEffect } from 'react';


const LoginPage= () => {
    const [cars, setCars] = useState([]);
    const [newCar, setNewCar] = useState({ make: '', model: '', year: '' });
    const [updateCar, setUpdateCar] = useState({ id: '', make: '', model: '', year: '' });


    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars');
            const data = await response.json();
            setCars(data);
        } catch (error) {
            console.error('Помилка при отриманні списку машин:', error);
        }
    };

    const createCar = async () => {
        try {
            await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCar),
            });
            setNewCar({ make: '', model: '', year: '' });
            fetchCars();
        } catch (error) {
            console.error('Помилка при створенні машини:', error);
        }
    };

    // Видалити машину за ідентифікатором
    const deleteCar = async (id) => {
        try {
            await fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
                method: 'DELETE',
            });
            fetchCars();
        } catch (error) {
            console.error('Помилка при видаленні машини:', error);
        }
    };

    // Оновити машину за ідентифікатором
    const updateCarById = async () => {
        try {
            await fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${updateCar.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateCar),
            });
            setUpdateCar({ id: '', make: '', model: '', year: '' });
            fetchCars();
        } catch (error) {
            console.error('Помилка при оновленні машини:', error);
        }
    };

    return (
        <div>
            <h2>Створення машини</h2>
            <form onSubmit={createCar} >
                <label>
                    Марка:
                    <input

                        type="text"
                        value={newCar.make}
                        onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
                    />
                </label>
                <label>
                    Модель:
                    <input

                        type="text"
                        value={newCar.model}
                        onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
                    />
                </label>
                <label>
                    Рік:
                    <input

                        type="text"
                        value={newCar.year}
                        onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
                    />
                </label>
                <button type="submit">Створити</button>
            </form>

            <h2>Список машин</h2>
            <ul>
                {cars.map((car) => (
                    <li key={car.id}>
                        {car.make} - {car.model} ({car.year}){' '}
                        <button onClick={() => deleteCar(car.id)}>Видалити</button>
                    </li>
                ))}
            </ul>

            <h2>Оновлення машини</h2>
            <form onSubmit={updateCarById} >
                <label>
                    Ідентифікатор:
                    <input

                        type="text"
                        value={updateCar.id}
                        onChange={(e) => setUpdateCar({ ...updateCar, id: e.target.value })}
                    />
                </label>
                <label>
                    Марка:
                    <input

                        type="text"
                        value={updateCar.make}
                        onChange={(e) => setUpdateCar({ ...updateCar, make: e.target.value })}
                    />
                </label>
                <label>
                    Модель:
                    <input

                        type="text"
                        value={updateCar.model}
                        onChange={(e) => setUpdateCar({ ...updateCar, model: e.target.value })}
                    />
                </label>
                <label>
                    Рік:
                    <input

                        type="text"
                        value={updateCar.year}
                        onChange={(e) => setUpdateCar({ ...updateCar, year: e.target.value })}
                    />
                </label>
                <button

                    type="submit">Оновити</button>
            </form>
        </div>
    );
};

export default LoginPage;

