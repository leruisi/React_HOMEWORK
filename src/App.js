import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Используем Routes вместо Switch
import Todos from './components/Todos';
import Albums from './components/Albums';
import Comments from './components/Comments';
import Post from './components/Posts';
// import style from './components/style.moduls.css'

const App = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Головна</Link>
                    </li>
                    <li>
                        <Link to="/todos">Todos</Link>
                    </li>
                    <li>
                        <Link to="/albums">Albums</Link>
                    </li>
                    <li>
                        <Link to="/comments">Comments</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todos" element={<Todos />} />
                <Route path="/albums" element={<Albums />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/post/:postId" element={<Post />} />
            </Routes>
        </div>
    );
};

const Home = () => {
    return (
        <div>
            <h2>Тут має бути якийсь контент</h2>
            <p >На головній сторонці відсутній контент бо він в розробці, вибачте за незручності </p>
        </div>
    );
};

export default App;

