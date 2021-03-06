export const ID = 'id';
export const NAME = 'name';
export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';
export const DETAILS_STORAGE = 'userDetails';

export const PARSE = JSON.parse;
export const STRINGIFY = JSON.stringify;

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REFRESH = 'REFRESH';

export const ACTIONS = {
  LOGIN_PENDING: `${LOGIN}_PENDING`,
  LOGIN_FULFILLLED: `${LOGIN}_FULFILLED`,
  LOGIN_REJECTED: `${LOGIN}_REJECTED`,

  LOGOUT_PENDING: `${LOGOUT}_PENDING`,
  LOGOUT_FULFILLLED: `${LOGOUT}_FULFILLED`,
  LOGOUT_REJECTED: `${LOGOUT}_REJECTED`,

  REFRESH_PENDING: `${REFRESH}_PENDING`,
  REFRESH_FULFILLLED: `${REFRESH}_FULFILLED`,
  REFRESH_REJECTED: `${REFRESH}_REJECTED`,
};
