import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { fetchCars, createCar, deleteCar, updateCar } from '../service/CarsService';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const [newCar, setNewCar] = useState({ brand: '', price: '', year: '' });
    const [updateCar, setUpdateCar] = useState({ id: '', brand: '', price: '', year: '' });

    useEffect(() => {
        fetchCarData();
    }, []);

    const fetchCarData = async () => {
        try {
            const carsData = await fetchCars();
            setCars(carsData);
        } catch (error) {
            console.error('Ошибка при получении списка машин:', error);
        }
    };

    const onSubmit = async () => {
        try {
            await createCar(newCar);
            reset();
            fetchCarData();
        } catch (error) {
            console.error('Ошибка при создании машины:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteCar(id);
            fetchCarData();
        } catch (error) {
            console.error('Ошибка при удалении машины:', error);
        }
    };

    const handleUpdate = async () => {
        try {
            await updateCar(updateCar.id, updateCar);
            fetchCarData();
        } catch (error) {
            console.error('Ошибка при обновлении машины:', error);
        }
    };

    return (
        <div>
            <h2>Створення машини</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Марка:
                    <input type="text" name="brand" value={newCar.brand} onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })} />
                </label>
                <label>
                    Ціна:
                    <input type="text" name="price" value={newCar.price} onChange={(e) => setNewCar({ ...newCar, price: e.target.value })} />
                </label>
                <label>
                    Рік:
                    <input type="text" name="year" value={newCar.year} onChange={(e) => setNewCar({ ...newCar, year: e.target.value })} />
                </label>
                <button type="submit">Створити</button>
            </form>

            <h2>Список машин</h2>
            <ul>
                {cars.map((car) => (
                    <li key={car.id}>
                        {car.brand} - {car.price} ({car.year}){' '}
                        <button onClick={() => handleDelete(car.id)}>Видалити</button>
                    </li>
                ))}
            </ul>

            <h2>Оновлення машини</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Ідентифікатор:
                    <input type="text" name="id" value={updateCar.id} onChange={(e) => setUpdateCar({ ...updateCar, id: e.target.value })} />
                </label>
                <label>
                    Марка:
                    <input type="text" name="brand" value={updateCar.brand} onChange={(e) => setUpdateCar({ ...updateCar, brand: e.target.value })} />
                </label>
                <label>
                    Ціна:
                    <input type="text" name="price" value={updateCar.price} onChange={(e) => setUpdateCar({ ...updateCar, price: e.target.value })} />
                </label>
                <label>
                    Рік:
                    <input type="text" name="year" value={updateCar.year} onChange={(e) => setUpdateCar({ ...updateCar, year: e.target.value })} />
                </label>
                <button type="submit" onClick={handleUpdate}>
                    Оновити
                </button>
            </form>
        </div>
    );
};

export default Cars;

