import React from 'react';
import { Stores, stores } from './index';

export const StoresContext = React.createContext<Stores>(stores);
export const useStores = () => React.useContext(StoresContext);
