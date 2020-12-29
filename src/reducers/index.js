import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// import storage from "redux-persist/lib/storage";
import AsyncStorage from '@react-native-community/async-storage';
import User from './User';
import Product from './Product';

const userPersistConfig = {
  key: 'User',
  storage: AsyncStorage,
  whitelist: ['user'], // only navigation will be persisted
};

const productPersistConfig = {
  key: 'Product',
  storage: AsyncStorage,
  whitelist: ['product'], // only navigation will be persisted
};

export default combineReducers({
  User: persistReducer(userPersistConfig, User),
  Product: persistReducer(productPersistConfig, Product),
});
