export const initialState = {
	user: null,
	token: null,
	playlists: [],
	playing: false,
	items: null,
	discover_weekly: null
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.payload
			};
		case 'SET_TOKEN':
			return {
				...state,
				token: action.payload
			};
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.payload
			};
		case 'SET_DISCOVER_WEEKLY':
			return {
				...state,
				discover_weekly: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
