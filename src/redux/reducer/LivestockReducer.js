const initialState = {
  dataLivestock: {},
  dataLivestockID: {},
  dataLivestockCat: {},
  isLoading: false,
  modalDetail: false,
  modalCategory: false,
};

export const LivestockReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_DATA_LIVESTOCK':
      return {...state, dataLivestock: action.payload};
    case 'SAVE_DATA_LIVESTOCKID':
      return {...state, dataLivestockID: action.payload};
    case 'SAVE_DATA_LIVESTOCKCAT':
      return {...state, dataLivestockCat: action.payload};
    case 'ISLOADING':
      return {...state, isLoading: action.payload};
    case 'SHOW_DETAIL':
      return {...state, modalDetail: action.payload};
    case 'SHOW_CATEGORY':
      return {...state, modalCategory: action.payload};
    default:
      return state;
  }
};
