import {applyMiddleware, combineReducers, compose, createStore, Store,} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import authReducer from '../context/auth/authReducer';
import signinReducer from '../context/auth/signinReducer';
import signoutReducer from '../context/auth/signoutReducer';
import signupReducer from '../context/auth/signupReducer';
import getNearStoresReducer from '../context/stores/getNearStoresReducer';
import createAddressReducer from '../context/addresses/createAddressReducer';
import passwordRecoveryReducer from '../context/passwordRecovery/passwordRecoveryReducer';
import passwordResetReducer from '../context/passwordRecovery/passwordResetReducer';

let store: Store;

const rootReducer = combineReducers({
    authReducer,
    signinReducer,
    signoutReducer,
    signupReducer,
    getNearStoresReducer,
    createAddressReducer,
    passwordRecoveryReducer,
    passwordResetReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const middlewares = [thunk];
if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());


    store = createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(...middlewares)),
    );
} else {
    store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)));
}

const persistor = persistStore(store);
export {store, persistor};
