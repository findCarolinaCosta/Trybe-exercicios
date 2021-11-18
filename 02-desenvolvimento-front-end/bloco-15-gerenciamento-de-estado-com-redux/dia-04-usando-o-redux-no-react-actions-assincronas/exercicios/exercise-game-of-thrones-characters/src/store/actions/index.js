export const REQUEST_CHARACTER_API = 'REQUEST_CHARACTER';
export const REQUEST_CHARACTER_API_RESOLVE = 'REQUEST_CHARACTER_API_RESOLVE';
export const REQUEST_CHARACTER_API_REJECT = 'REQUEST_CHARACTER_API_REJECT';

export const requestCharacterApi = () => ({ type: REQUEST_CHARACTER_API });

export const getResolveInRequestApi = (payload) => ({ type: REQUEST_CHARACTER_API_RESOLVE, payload });

export const getRejectInRequestApi = (error) => ({ type: REQUEST_CHARACTER_API_REJECT, error });
