// src/components/Albums.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { albumsUrl } from '../service/services';

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios.get(albumsUrl)
            .then((response) => setAlbums(response.data))
            .catch((error) => console.error('Error fetching albums', error));
    }, []);

    return (
        <div>
            <h2>Albums</h2>
            <ul>
                {albums.map(album => <li key={album.id}>{album.title}</li>)}
            </ul>
        </div>
    );
};

export default Albums;
