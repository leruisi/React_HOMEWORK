import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';

const SubChild2_2 = () => {
    const { setData } = useContext(DataContext);

    const handleButtonClick = () => {
        const newData = 'New Data';
        setData(newData);
    }

    return (
        <div>
            <h3>SubChild2_2</h3>
            <button onClick={handleButtonClick}>Update Data</button>
        </div>
    );
}

export default SubChild2_2;


