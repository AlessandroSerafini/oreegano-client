import {Dispatch} from 'redux';
import {AxiosResponse} from 'axios';
import oreeganoApi from '../../api/oreeganoApi';
import {SIGNUP_TYPES, SignupAction} from './signupTypes';
import {User} from '../../models/User';

export const signUp = (
  data: Omit<
    User,
    'id' | 'pswRecToken' | 'pswRecTokenExpireDate' | 'pswRecExpireDate'
  >,
) => async (dispatch: Dispatch<SignupAction>) => {
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
    console.log('passo', JSON.stringify(response.data, null, 2));
    /*const mappedAddresses: Address[] = await mapResponseIntoAddresses(
      response.data,
    );

    if (Array.isArray(response.data) && response.data.length > 0) {
      dispatch({
        type: SIGNUP_TYPES.SIGNUP_COMPLETED,
        payload: mappedAddresses,
      });
    }*/
  } catch (e) {
    const {error} = e.response.data;
    dispatch({
      type: SIGNUP_TYPES.SIGNUP_ADD_ERROR,
      payload: error.message,
    });
  }
};
