import React from 'react';
import Child1 from './components/Child1/Child1';
import Child2 from './components/Child2/Child2';
import DataContext from './components/context/DataContext';

const App = () => {
    return (
        <div>
            <DataContext>
                <Child1 />
                <Child2 />
            </DataContext>
        </div>
    );
}

export  {App};
