export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://aws.random.cat/meow');
      const json = await response.json();

      dispatch(getPicture(json));

    } catch (e) {
      console.log(e);
    }
  }
}
