
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { todosUrl } from '../service/services';

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get(todosUrl)
            .then((response) => setTodos(response.data))
            .catch((error) => console.error('Error fetching todos', error));
    }, []);


    return (
        <div>
            <h2>Todos</h2>
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>
        </div>
    );
};

export default Todos;
