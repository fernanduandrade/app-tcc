export const initialState = {
  favorites: [],
  coordinates: null,
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'SET_COORDINATES':
      return {...state, coordinates: action.payload};
    default:
      return state;
  }
}