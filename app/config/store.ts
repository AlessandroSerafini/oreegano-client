import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import authReducer from '../context/auth/authReducer';

let store: Store;

const rootReducer = combineReducers({
  authReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 0,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

if (__DEV__) {
  store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
} else {
  store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
}

const persistor = persistStore(store);
export {store, persistor};
