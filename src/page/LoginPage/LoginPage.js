import React, { useState, useEffect } from 'react';


const LoginPage= () => {
    const [cars, setCars] = useState([]);
    const [newCar, setNewCar] = useState({ brand: '', price: '', year: '' });
    const [updateCar, setUpdateCar] = useState({ id: '', brand: '', price: '', year: '' });


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
            setNewCar({ brand: '', price: '', year: '' });
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
            setUpdateCar({ id: '', brand: '', price: '', year: '' });
            fetchCars();
        } catch (error) {
            console.error('Помилка при оновленні машини:', error);
        }
    };

    return (
        <div>
            <h2>Створення машини</h2>
            <form onSubmit={createCar}  >
                <label>
                    Марка:
                    <input

                        type="text"
                        value={newCar.brand}
                        onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })}
                    />
                </label>
                <label>
                    Ціна:
                    <input

                        type="text"
                        value={newCar.price}
                        onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
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
                        {car.brand} - {car.price} ({car.year}){' '}
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
                        value={updateCar.brand}
                        onChange={(e) => setUpdateCar({ ...updateCar, brand: e.target.value })}
                    />
                </label>
                <label>
                    Ціна:
                    <input

                        type="text"
                        value={updateCar.price}
                        onChange={(e) => setUpdateCar({ ...updateCar, price: e.target.value })}
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

