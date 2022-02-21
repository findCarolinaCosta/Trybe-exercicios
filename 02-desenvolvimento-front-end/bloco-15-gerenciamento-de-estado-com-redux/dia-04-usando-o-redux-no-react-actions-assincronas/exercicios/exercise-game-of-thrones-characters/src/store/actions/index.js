import charAPI from "../../services/charAPI";

export const REQUEST_CHARACTER_API = 'REQUEST_CHARACTER';
export const REQUEST_CHARACTER_API_RESOLVE = 'REQUEST_CHARACTER_API_RESOLVE';
export const REQUEST_CHARACTER_API_REJECT = 'REQUEST_CHARACTER_API_REJECT';

export const requestCharacterApi = () => ({ type: REQUEST_CHARACTER_API });

export const getResolveInRequestApi = (payload) => ({ type: REQUEST_CHARACTER_API_RESOLVE, payload });

export const getRejectInRequestApi = (error) => ({ type: REQUEST_CHARACTER_API_REJECT, error });

export function requestCharacterThunk(name) {
  return async (dispatch) => {
    dispatch(requestCharacterApi())
    try {
      const response = await charAPI(name);
      const character = response[0];
      dispatch(getResolveInRequestApi(character));
    } catch (error) {
      console.log(error);
      dispatch(getRejectInRequestApi('Não encontrado!'));
    }
  }
}