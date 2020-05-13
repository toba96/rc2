import {AUTH_SUCCESS, AUTH_FAIL, LOGOUT, CLEAR_ERRORS} from '../types';

export default (state, action) => {
	const {type, payload} = action;
	switch (type) {
		case AUTH_SUCCESS:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
				user: payload.user
			};
		case AUTH_FAIL:
		case LOGOUT:
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
				error: payload
			};
		case CLEAR_ERRORS:
			return {
				...state,
				errors: null
			};
		default:
			return state;
	}
};