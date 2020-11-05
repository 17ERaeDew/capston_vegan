import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './src/reducers';

const store = configureStore({
  reducer: rootReducer,
    middleware: [],
});

const persistor = persistStore(store);
const ProviderWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ProviderWrapper;
