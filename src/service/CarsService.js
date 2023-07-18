import axios from 'axios';

const BASE_URL = 'http://owu.linkpc.net/carsAPI/v1/cars';

export const fetchCars = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении списка машин:', error);
        throw error;
    }
};

export const createCar = async (carData) => {
    try {
        await axios.post(BASE_URL, carData);
    } catch (error) {
        console.error('Ошибка при создании машины:', error);
        throw error;
    }
};

export const deleteCar = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error('Ошибка при удалении машины:', error);
        throw error;
    }
};

export const updateCar = async (id, carData) => {
    try {
        await axios.put(`${BASE_URL}/${id}`, carData);
    } catch (error) {
        console.error('Ошибка при обновлении машины:', error);
        throw error;
    }
};
