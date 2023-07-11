import React, { createContext, useState } from 'react';

export const DataContext = createContext(null); // Set initial value to null

const DataContextProvider = (props) => {
    const [data, setData] = useState('');

    return (
        <DataContext.Provider value={{ data, setData }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;


