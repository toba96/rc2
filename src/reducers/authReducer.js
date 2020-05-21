import {
	AUTH_SUCCESS,
	AUTH_FAIL,
	LOGOUT,
	CLEAR_ERRORS
} from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: false,
	loading: null,
	user: null,
	error: null
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case AUTH_SUCCESS:
			localStorage.setItem('token', payload.jwt);
			return {
				...state,
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
				error: null
			};
		default:
			return state;
	}
};
