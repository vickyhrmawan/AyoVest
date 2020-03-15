const initialState = {
  dataLivestock: {},
  isLoading: false,
  modalDetail: false,
};

export const LivestockReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_DATA_LIVESTOCK':
      return {...state, dataLivestock: action.payload};
    case 'ISLOADING':
      return {...state, isLoading: action.payload};
    case 'SHOW_DETAIL':
      return {...state, modalDetail: action.payload};
    default:
      return state;
  }
};
