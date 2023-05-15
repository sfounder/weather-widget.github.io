// Core
import { createContext } from 'react';

// Store
import { store } from './mobx';

export const StoreContext = createContext(store);

export const StoreProvider = (props) => {
    return (
        <StoreContext.Provider value = { store }>
            { props.children }
        </StoreContext.Provider>
    );
};
