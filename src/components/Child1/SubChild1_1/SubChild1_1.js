import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';

const SubChild1_1 = () => {
    const { data } = useContext(DataContext);

    return <div>Received data: {data}</div>;
}

export default SubChild1_1;
