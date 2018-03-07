import {
	EMPLOYEES_FETCH_SUCCES
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEES_FETCH_SUCCES:
			console.log(action);
			return state;
		default:
			return state;
	}
};
