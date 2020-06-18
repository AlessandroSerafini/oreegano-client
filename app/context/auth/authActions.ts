import {Dispatch} from 'redux';
import {AxiosResponse} from 'axios';
import oreeganoApi from '../../api/oreeganoApi';
import {AUTH_TYPES, AuthAction} from './authTypes';
import {User} from '../../models/User';
import AsyncStorage from "@react-native-community/async-storage";
import {USER_DATA} from "../../data/StorageConstants";

export interface JwtResponse {
  id: string;
  user: Omit<
    User,
    'password'
  >;
}

export const signUp = (
  data: Omit<
    User,
    'id' | 'pswRecToken' | 'pswRecTokenExpireDate' | 'pswRecExpireDate'
  >,
) => async (dispatch: Dispatch<AuthAction>) => {
  try {
    const {type, name, email, password} = data;
    const response: AxiosResponse<any> = await oreeganoApi.post(
      '/users/signup',
      {
        type,
        name,
        email,
        password,
      },
    );

    dispatch({
      type: AUTH_TYPES.SIGNUP_COMPLETED,
      payload: response.data,
    });
  } catch (e) {
    const {error} = e.response.data;
    dispatch({
      type: AUTH_TYPES.SIGNUP_ADD_ERROR,
      payload: error.message,
    });
  }
};

export const clearErrorMessage = () => (dispatch: Dispatch<AuthAction>) => {
  dispatch({ type: AUTH_TYPES.SIGNUP_CLEAR_ERROR });
};
