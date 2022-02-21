import fetchDogApi from "../../services";

export const REQUEST_API = 'REQUEST_API';
export const SAVE_DOG_INFO = 'SAVE_DOG_INFO';

export const requestApi = () => ({ type: REQUEST_API });
export const  saveDogInfo = (payload) => ({ type: SAVE_DOG_INFO, payload });


export function requestDogApi() {
  return async (dispatch) => {
    dispatch(requestApi())
    try {
      const response = await fetchDogApi();
      await dispatch(saveDogInfo(response));
    } catch (error) {
      console.log(error);
    }
  }
}
