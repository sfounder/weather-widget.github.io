// Core
import { useContext } from 'react';

// Lib
import { StoreContext } from '../lib';

export const useStore = () => {
    const store = useContext(StoreContext);

    return store;
};
